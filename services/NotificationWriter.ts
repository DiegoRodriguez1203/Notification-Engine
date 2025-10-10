import * as fs from "fs/promises";
import * as path from "path";
import { NotificationRecord, FileRecords } from "../interfaces/Record";

export class NotificationWriter {
  private readonly dir = path.join(__dirname, "../data");
  private readonly filePath = path.join(this.dir, "notifications.json");

  async write(records: FileRecords): Promise<void> {
    await fs.mkdir(this.dir, { recursive: true });
    await fs.writeFile(this.filePath, JSON.stringify(records, null, 2), "utf-8");
  }

  async read(): Promise<FileRecords> {
    try {
      const data = await fs.readFile(this.filePath, "utf-8");
      return data ? JSON.parse(data) : {};
    } catch {
      return {};
    }
  }
}
 