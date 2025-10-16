"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationMemory = void 0;
class NotificationMemory {
    constructor() {
        this.records = {};
    }
    add(userId, record) {
        if (!this.records[userId]) {
            this.records[userId] = [];
        }
        this.records[userId].push(record);
    }
    get(userId) {
        return this.records[userId] ?? [];
    }
}
exports.NotificationMemory = NotificationMemory;
