"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationService = void 0;
class NotificationService {
    constructor(gateway) {
        this.messageCount = {};
        this.maxMessagesPerUser = 3;
        this.gateway = gateway;
    }
    send(type, userId, message, urgency = false) {
        this.messageCount[userId] = (this.messageCount[userId] || 0) + 1;
        if (this.messageCount[userId] > this.maxMessagesPerUser) {
            console.log(`User ${userId} has reached the message limit.`);
            return;
        }
        this.gateway.send(userId, message);
    }
}
exports.NotificationService = NotificationService;
