"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchResultIndex = exports.MatchResult = void 0;
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult = exports.MatchResult || (exports.MatchResult = {}));
exports.MatchResultIndex = (_a = {},
    _a[MatchResult.HomeWin] = 1,
    _a[MatchResult.AwayWin] = 2,
    _a[MatchResult.Draw] = 3,
    _a);
