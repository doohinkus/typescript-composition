import fs from "fs";
import { MatchData } from "../tuples";
import { DataReader } from "../interfaces";
import { dateStringtoDate } from "../utils";
import { MatchResult } from "../enums";

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
    let teamIndex: number;
    switch (true) {
      case result === MatchResult.HomeWin:
        teamIndex = 1;
        break;
      case result === MatchResult.AwayWin:
        teamIndex = 2;
        break;
      case result === MatchResult.Draw:
        teamIndex = 3;
        break;
    }
    return (
      this.matches
        .filter((match): boolean => match[teamIndex] === team)
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
