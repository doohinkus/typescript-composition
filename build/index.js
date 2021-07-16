"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var classes_1 = require("./classes");
var enums_1 = require("./enums");
var csvFileReader = new classes_1.CSVFileReader("football.csv");
var matchReader = new classes_1.MatchReader(csvFileReader);
matchReader.load();
var manWinsHome = matchReader.matches
    .filter(function (match) { return match[1] === "Man United"; })
    .filter(function (match) { return match[5] === enums_1.MatchResult.HomeWin; });
var manWinsAway = matchReader.matches
    .filter(function (match) { return match[2] === "Man United"; })
    .filter(function (match) { return match[5] === enums_1.MatchResult.AwayWin; });
console.log("Manchester United wins " + manWinsHome.length + " games as home team and " + manWinsAway.length + " as away team.\n    ");
