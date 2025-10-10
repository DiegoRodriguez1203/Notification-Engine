import { NotificationMemory } from "./NotificationMemory";
import { NotificationWriter } from "./NotificationWriter";
import { FileRecords } from "../interfaces/Record";

export class NotificationLoader {
  constructor(
    private readonly memory: NotificationMemory,
    private readonly writer: NotificationWriter
  ) {}

  async initialize(): Promise<void> {
    const fileData: FileRecords = await this.writer.read();

    for (const [userId, records] of Object.entries(fileData)) {
      if (!Array.isArray(records)) continue;

      for (const record of records) {
        this.memory.add(userId, record);
      }
    }
  }
}
