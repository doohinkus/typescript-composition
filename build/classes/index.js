"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSVFileReader = exports.MatchReader = void 0;
var fs_1 = __importDefault(require("fs"));
var utils_1 = require("../utils");
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
