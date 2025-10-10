"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationValidator = void 0;
/**
 * Applies frequency rules and limits per user for notifications using Intervals
 */
const Intervals_1 = require("../config/Intervals");
class NotificationValidator {
    minutesToMs(minutes) {
        return minutes * 60 * 1000;
    }
    canSend(userId, type, urgent, userNotifications) {
        // Handle case where type is not defined in Intervals
        if (!(type in Intervals_1.intervals)) {
            console.warn(`Tipo de notificacion invalida para usuario ${userId}: ${type}`);
            return false;
        }
        // Urgent notifications bypass validation and are always allowed
        if (urgent == true) {
            return true;
        }
        const now = Date.now();
        const last24h = now - 24 * 60 * 60 * 1000;
        const recent24h = userNotifications.filter(n => n.timestamp > last24h);
        if (recent24h.length >= Intervals_1.maxTotal24h) {
            console.log(`No se puede enviar ${type} a ${userId}: límite total 24h alcanzado`);
            return false;
        }
        const intervalMs = this.minutesToMs(Intervals_1.intervals[type].minutes);
        const recentType = userNotifications.filter(n => n.type === type && n.timestamp > now - intervalMs);
        if (recentType.length >= Intervals_1.intervals[type].max) {
            console.log(`No se puede enviar ${type} a ${userId}: máximo ${Intervals_1.intervals[type].max} en ${Intervals_1.intervals[type].minutes} minutos`);
            return false;
        }
        return true;
    }
}
exports.NotificationValidator = NotificationValidator;
