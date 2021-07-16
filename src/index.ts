import { MatchReader, CSVFileReader } from "./classes";
import { MatchResult } from "./enums";

const csvFileReader = new CSVFileReader("football.csv");
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
const manWinsHome = matchReader.matchResultByTeam(
  "Man United",
  MatchResult.HomeWin
);

const manWinsAway = matchReader.matchResultByTeam(
  "Man United",
  MatchResult.AwayWin
);

const manDrawAway = matchReader.matchResultByTeam(
  "Man United",
  MatchResult.Draw
);
console.log(
  `Manchester United wins ${manWinsHome} games as home team and ${manWinsAway} as away team. Drawn games ${manDrawAway}.
    `
);
