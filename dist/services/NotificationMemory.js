"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationMemory = void 0;
/**
 * Manages user notification history in memory and supports loading data from persistent storage.
 */
class NotificationMemory {
    constructor() {
        this.records = {};
    }
    /**
     * Adds a notification record to a user's memory history.
     * @param userId - User identifier
     * @param record - Notification data to store
     */
    add(userId, record) {
        if (!this.records[userId]) {
            this.records[userId] = [];
        }
        this.records[userId].push(record);
    }
    /**
     * Retrieves all notifications stored for a given user.
     * @param userId - User identifier
     * @returns List of notification records
     */
    get(userId) {
        return this.records[userId] ?? [];
    }
}
exports.NotificationMemory = NotificationMemory;
