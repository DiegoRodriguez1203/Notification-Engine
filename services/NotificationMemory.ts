import { NotificationRecord, FileRecords } from "../interfaces/Record";

export class NotificationMemory {
  private records: FileRecords = {};

  add(userId: string, record: NotificationRecord): void {
    if (!this.records[userId]) {
      this.records[userId] = [];
    }
    this.records[userId].push(record);
  }

  get(userId: string): NotificationRecord[] {
    return this.records[userId] ?? [];
  }
}
