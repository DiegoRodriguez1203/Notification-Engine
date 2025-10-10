"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationLoader = void 0;
class NotificationLoader {
    constructor(memory, writer) {
        this.memory = memory;
        this.writer = writer;
    }
    async initialize() {
        const fileData = await this.writer.read();
        for (const [userId, records] of Object.entries(fileData)) {
            if (!Array.isArray(records))
                continue;
            for (const record of records) {
                this.memory.add(userId, record);
            }
        }
    }
}
exports.NotificationLoader = NotificationLoader;
