import { NotificationType } from "../config/Intervals";

export interface NotificationRecord {
  readonly type: NotificationType;
  readonly timestamp: number;
}

export interface FileRecords {
  [userId: string]: NotificationRecord[];
}
