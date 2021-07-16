import { MatchReader, CSVFileReader } from "./classes";
import { MatchResult } from "./enums";

const csvFileReader = new CSVFileReader("football.csv");
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const manWinsHome = matchReader.matches
  .filter((match): boolean => match[1] === "Man United")
  .filter((match): boolean => match[5] === MatchResult.HomeWin);

const manWinsAway = matchReader.matches
  .filter((match) => match[2] === "Man United")
  .filter((match) => match[5] === MatchResult.AwayWin);

console.log(
  `Manchester United wins ${manWinsHome.length} games as home team and ${manWinsAway.length} as away team.
    `
);
