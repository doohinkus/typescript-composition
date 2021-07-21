"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var classes_1 = require("./classes");
var csvFileReader = new classes_1.CSVFileReader("football.csv");
var matchReader = new classes_1.MatchReader(csvFileReader);
matchReader.load();
var consoleSummary = new classes_1.Summary(new classes_1.WinsAnalysis("Man United"), new classes_1.ConsoleReport());
var HTMLSummary = new classes_1.Summary(new classes_1.WinsAnalysis("Man United"), new classes_1.HTMLReport("results.html"));
consoleSummary.buildAndPrintReport(matchReader.matches);
HTMLSummary.buildAndPrintReport(matchReader.matches);
// Summary.TeamWinsConsoleReport("Man United");
// summary.TeamWinsHtmlReport("Man United");
// summary.buildAndPrintReport(matchReader.matches);
// summary.buildAndPrintReport(new HTMLReport("report.html"));
// const manWinsHome = matchReader.matchResultByTeam(
//   "Man United",
//   MatchResult.HomeWin
// );
// const manWinsAway = matchReader.matchResultByTeam(
//   "Man United",
//   MatchResult.AwayWin
// );
// const manDrawAway = matchReader.matchResultByTeam(
//   "Man United",
//   MatchResult.Draw
// );
// console.log(
//   `Manchester United wins ${manWinsHome} games as home team and ${manWinsAway} as away team. Drawn games ${manDrawAway}.
//     `
// );
