import fs from "fs";
import { MatchData } from "../tuples";
import { DataReader } from "../interfaces";
import { dateStringtoDate } from "../utils";
import { MatchResult, MatchResultIndex } from "../enums";

export class MatchReader {
  matches: MatchData[] = [];
  constructor(public reader: DataReader) {}
  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map((row): MatchData => {
      return [
        dateStringtoDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5],
      ];
    });
  }

  matchResultByTeam(team: string, result: MatchResult): number {
    return (
      this.matches
        .filter((match): boolean => match[MatchResultIndex[result]] === team)
        .filter((match): boolean => match[5] === result).length || 0
    );
  }
}

export class CSVFileReader {
  constructor(public fileName: string) {}
  data: string[][] = [];
  read(): void {
    this.data = fs
      .readFileSync(this.fileName, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((row: string): string[] => row.split(","));
  }
}
