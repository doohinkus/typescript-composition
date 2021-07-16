"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var classes_1 = require("./classes");
var csvFileReader = new classes_1.CSVFileReader("football.csv");
var matchReader = new classes_1.MatchReader(csvFileReader);
matchReader.load();
var manWinsHome = matchReader.matches
    .filter(function (match) { return match[1] === "Man United"; })
    .filter(function (match) { return match[5] === "H"; });
var manWinsAway = matchReader.matches
    .filter(function (match) { return match[2] === "Man United"; })
    .filter(function (match) { return match[5] === "A"; });
console.log("Man United wins " + manWinsHome.length + " games as home and " + manWinsAway.length + " as away.\n    ");
