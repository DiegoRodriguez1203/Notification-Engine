"use strict";
class Gateway {
    send(userId, message) {
        console.log(`Sending message to user ${userId}: "${message}"`);
    }
}
class NotificationServiceImpl {
    constructor(gateway) {
        this.messageCount = {};
        this.maxMessagesPerUser = 3;
        this.gateway = gateway;
    }
    send(type, userId, message) {
        // Increment message count
        this.messageCount[userId] = (this.messageCount[userId] || 0) + 1;
        // Check rate limit
        if (this.messageCount[userId] > this.maxMessagesPerUser) {
            console.log(`User ${userId} has reached the message limit.`);
            return;
        }
        // Send message via gateway
        this.gateway.send(userId, message);
    }
}
