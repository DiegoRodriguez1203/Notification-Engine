"use strict";
/*
* Configuration table to control the notifications per minute/hour
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.maxTotal24h = exports.intervals = void 0;
exports.intervals = {
    news: { max: 10, minutes: 30 },
    info: { max: 5, minutes: 1 },
    marketing: { max: 5, minutes: 60 },
    status: { max: 20, minutes: 5 }
};
exports.maxTotal24h = 2;
