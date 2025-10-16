"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationService = void 0;
class NotificationService {
    constructor(gateway, validator, memory, writer) {
        this.gateway = gateway;
        this.validator = validator;
        this.memory = memory;
        this.writer = writer;
    }
    async send(type, userId, message, urgent = false) {
        const userNotifications = this.memory.get(userId);
        if (!this.validator.canSend(type, urgent, userNotifications))
            return;
        this.gateway.send(userId, message);
        const record = { type, timestamp: Date.now() };
        this.memory.add(userId, record);
        await this.writer.addRecord(userId, record);
    }
}
exports.NotificationService = NotificationService;
