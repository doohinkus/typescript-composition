"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringtoDate = void 0;
var dateStringtoDate = function (dateString) {
    var dateSegments = dateString
        .split("/")
        .map(function (value) { return parseInt(value); });
    var year = dateSegments[2];
    var month = dateSegments[1] - 1;
    var day = dateSegments[0];
    return new Date(year, month, day);
};
exports.dateStringtoDate = dateStringtoDate;
