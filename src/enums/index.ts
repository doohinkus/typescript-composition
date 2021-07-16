export enum MatchResult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
}
export const MatchResultIndex = {
  [MatchResult.HomeWin]: 1,
  [MatchResult.AwayWin]: 2,
  [MatchResult.Draw]: 3,
};
