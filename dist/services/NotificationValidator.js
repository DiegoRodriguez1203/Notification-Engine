"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationValidator = void 0;
const Intervals_1 = require("../config/Intervals");
class NotificationValidator {
    minutesToMs(minutes) {
        return minutes * 60 * 1000;
    }
    canSend(type, urgent, userNotifications) {
        if (!(type in Intervals_1.intervals)) {
            return false;
        }
        if (urgent) {
            return true;
        }
        const now = Date.now();
        const last24h = now - 24 * 60 * 60 * 1000;
        const recent24h = userNotifications.filter(n => n.timestamp > last24h);
        if (recent24h.length >= Intervals_1.maxTotal24h) {
            return false;
        }
        const intervalMs = this.minutesToMs(Intervals_1.intervals[type].minutes);
        const recentType = userNotifications.filter(n => n.type === type && n.timestamp > now - intervalMs);
        return recentType.length < Intervals_1.intervals[type].max;
    }
}
exports.NotificationValidator = NotificationValidator;
