import { NotificationType, intervals, maxTotal24h } from "../config/Intervals";
import { NotificationRecord, FileRecords } from "../interfaces/Record";


export class NotificationValidator {
  private minutesToMs(minutes: number): number {
    return minutes * 60 * 1000;
  }

  canSend(
    type: NotificationType,
    urgent: boolean,
    userNotifications: NotificationRecord[]
  ): boolean {
    if (!(type in intervals)) {
      return false;
    }

    if (urgent) {
      return true;
    }

    const now = Date.now();
    const last24h = now - 24 * 60 * 60 * 1000;
    const recent24h = userNotifications.filter(n => n.timestamp > last24h);
    if (recent24h.length >= maxTotal24h) {
      return false;
    }

    const intervalMs = this.minutesToMs(intervals[type].minutes);
    const recentType = userNotifications.filter(
      n => n.type === type && n.timestamp > now - intervalMs
    );

    return recentType.length < intervals[type].max;
  }
}
