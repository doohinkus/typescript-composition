"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var matchData = new MatchReader_1.MatchReader("football.csv");
matchData.read();
var matches = matchData.data;
var manWinsHome = matches
    .filter(function (match) { return match[1] === "Man United"; })
    .filter(function (match) { return match[5] === "H"; });
var manWinsAway = matches
    .filter(function (match) { return match[2] === "Man United"; })
    .filter(function (match) { return match[5] === "A"; });
console.log("Man United wins " + manWinsHome.length + " games as home and " + manWinsAway.length + " as away.\n  ");
// console.log(teamWins);
