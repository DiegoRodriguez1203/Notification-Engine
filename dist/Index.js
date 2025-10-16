"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Gateway_1 = require("./gateways/Gateway");
const NotificationValidator_1 = require("./services/NotificationValidator");
const NotificationService_1 = require("./services/NotificationService");
const NotificationMemory_1 = require("./services/NotificationMemory");
const NotificationWriter_1 = require("./services/NotificationWriter");
const NotificationLoader_1 = require("./services/NotificationLoader");
async function main() {
    const gateway = new Gateway_1.Gateway();
    const validator = new NotificationValidator_1.NotificationValidator();
    const writer = new NotificationWriter_1.NotificationWriter();
    const memory = new NotificationMemory_1.NotificationMemory();
    const loader = new NotificationLoader_1.NotificationLoader(memory, writer);
    await loader.initialize();
    const notificationService = new NotificationService_1.NotificationService(gateway, validator, memory, writer);
    notificationService.send("info", "user1", "Hello!");
    notificationService.send("info", "user1", "Second message");
    notificationService.send("info", "user1", "Third message");
    notificationService.send("info", "user1", "Fourth message", true);
    notificationService.send("info", "user2", "Hello!");
    notificationService.send("info", "user2", "Second message");
    notificationService.send("info", "user2", "Third message");
    notificationService.send("info", "user3", "Fourth message", true);
}
main().catch(error => {
    throw error;
});
