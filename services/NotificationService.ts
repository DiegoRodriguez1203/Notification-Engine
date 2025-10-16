import { Notification } from "../interfaces/Notification";
import { Gateway } from "../gateways/Gateway";
import { NotificationValidator } from "./NotificationValidator";
import { NotificationType } from "../config/Intervals";
import { NotificationMemory } from "./NotificationMemory";
import { NotificationWriter } from "./NotificationWriter";
import { NotificationRecord } from "../interfaces/Record";

export class NotificationService implements Notification {
  constructor(
    private readonly gateway: Gateway,
    private readonly validator: NotificationValidator,
    private readonly memory: NotificationMemory,
    private readonly writer: NotificationWriter
  ) {}

  async send(
    type: NotificationType,
    userId: string,
    message: string,
    urgent: boolean = false
  ) {
    const userNotifications = this.memory.get(userId);
    if (!this.validator.canSend(type, urgent, userNotifications)) return;

    this.gateway.send(userId, message);

    const record: NotificationRecord = { type, timestamp: Date.now() };
    this.memory.add(userId, record);

    await this.writer.addRecord(userId, record);
  }
}
