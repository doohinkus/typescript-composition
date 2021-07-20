"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLReport = exports.ConsoleReport = exports.WinsAnalysis = exports.Summary = exports.CSVFileReader = exports.MatchReader = void 0;
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
        return (this.matches
            .filter(function (match) { return match[enums_1.MatchResultIndex[result]] === team; })
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
var Summary = /** @class */ (function () {
    // this class composes the methods from the other classes.
    // this is a weak "builder" pattern
    function Summary(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    Summary.prototype.buildAndPrintReport = function (matches) {
        this.outputTarget.print(this.analyzer.run(matches));
    };
    return Summary;
}());
exports.Summary = Summary;
var WinsAnalysis = /** @class */ (function () {
    function WinsAnalysis(team) {
        this.team = team;
    }
    WinsAnalysis.prototype.run = function (matches) {
        var _this = this;
        var homeWins = matches
            .filter(function (match) {
            return match[enums_1.MatchResultIndex[enums_1.MatchResult.HomeWin]] === _this.team;
        })
            .filter(function (match) { return match[5] === enums_1.MatchResult.HomeWin; }).length ||
            0;
        var awayWins = matches
            .filter(function (match) {
            return match[enums_1.MatchResultIndex[enums_1.MatchResult.AwayWin]] === _this.team;
        })
            .filter(function (match) { return match[5] === enums_1.MatchResult.AwayWin; }).length ||
            0;
        var totalWins = homeWins + awayWins;
        return this.team + " won " + totalWins + " game" + (totalWins > 1 ? "s" : "") + ".";
    };
    return WinsAnalysis;
}());
exports.WinsAnalysis = WinsAnalysis;
var ConsoleReport = /** @class */ (function () {
    function ConsoleReport() {
    }
    ConsoleReport.prototype.print = function (report) {
        console.log(report);
    };
    return ConsoleReport;
}());
exports.ConsoleReport = ConsoleReport;
var HTMLReport = /** @class */ (function () {
    function HTMLReport(fileName) {
        this.fileName = fileName;
    }
    HTMLReport.prototype.print = function (report) {
        var html = "\n    <div>\n      <h1>Analysis</h1>\n      <div>" + report + "</div>\n    </div>\n    ";
        fs_1.default.writeFileSync(this.fileName, html);
    };
    return HTMLReport;
}());
exports.HTMLReport = HTMLReport;
