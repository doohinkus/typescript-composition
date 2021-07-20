import { MatchData } from "../tuples";

export interface DataReader {
  read(): void;
  data: string[][];
}

export interface Analyzer {
  run(matches: MatchData[]): string;
}
export interface OutputTarget {
  print(report: string): void;
}
