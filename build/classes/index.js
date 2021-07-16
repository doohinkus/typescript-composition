"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSVFileReader = exports.MatchReader = void 0;
var fs_1 = __importDefault(require("fs"));
var utils_1 = require("../utils");
var enums_1 = require("../enums");
var MatchReader = /** @class */ (function () {
    function MatchReader(reader) {
        this.reader = reader;
        this.matches = [];
    }
    MatchReader.prototype.load = function () {
        this.reader.read();
        this.matches = this.reader.data.map(function (row) {
            return [
                utils_1.dateStringtoDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5],
            ];
        });
    };
    MatchReader.prototype.matchResultByTeam = function (team, result) {
        var teamIndex;
        switch (true) {
            case result === enums_1.MatchResult.HomeWin:
                teamIndex = 1;
                break;
            case result === enums_1.MatchResult.AwayWin:
                teamIndex = 2;
                break;
            case result === enums_1.MatchResult.Draw:
                teamIndex = 3;
                break;
        }
        return (this.matches
            .filter(function (match) { return match[teamIndex] === team; })
            .filter(function (match) { return match[5] === result; }).length || 0);
    };
    return MatchReader;
}());
exports.MatchReader = MatchReader;
var CSVFileReader = /** @class */ (function () {
    function CSVFileReader(fileName) {
        this.fileName = fileName;
        this.data = [];
    }
    CSVFileReader.prototype.read = function () {
        this.data = fs_1.default
            .readFileSync(this.fileName, {
            encoding: "utf-8",
        })
            .split("\n")
            .map(function (row) { return row.split(","); });
    };
    return CSVFileReader;
}());
exports.CSVFileReader = CSVFileReader;
