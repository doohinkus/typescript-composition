import {
  MatchReader,
  CSVFileReader,
  Summary,
  WinsAnalysis,
  ConsoleReport,
  HTMLReport,
} from "./classes";

const csvFileReader = new CSVFileReader("football.csv");
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
let consoleSummary = new Summary(
  new WinsAnalysis("Man United"),
  new ConsoleReport()
);
let HTMLSummary = new Summary(
  new WinsAnalysis("Man United"),
  new HTMLReport("results.html")
);

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
