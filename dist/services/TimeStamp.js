"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timestamp = void 0;
class Timestamp {
    static now() {
        return new Date().toISOString();
    }
}
exports.Timestamp = Timestamp;
