import { MatchReader, CSVFileReader } from "./classes";

const csvFileReader = new CSVFileReader("football.csv");
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const manWinsHome = matchReader.matches
  .filter((match): boolean => match[1] === "Man United")
  .filter((match): boolean => match[5] === "H");

const manWinsAway = matchReader.matches
  .filter((match) => match[2] === "Man United")
  .filter((match) => match[5] === "A");

console.log(
  `Man United wins ${manWinsHome.length} games as home and ${manWinsAway.length} as away.
    `
);
