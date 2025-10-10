"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gateway = void 0;
class Gateway {
    send(userId, message) {
        console.log(`Sending message to user ${userId}: "${message}"`);
    }
}
exports.Gateway = Gateway;
