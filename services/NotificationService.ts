import { Notification } from "../interfaces/Notification";
import { Gateway } from "../gateways/Gateway";
import { NotificationValidator } from "./NotificationValidator";
import { NotificationType } from "../config/Intervals";
import { NotificationMemory } from "./NotificationMemory";

export class NotificationService implements Notification {
  constructor(
    private readonly gateway: Gateway,
    private readonly validator: NotificationValidator,
    private readonly memory: NotificationMemory,
  ) {}

  send(
    type: NotificationType,
    userId: string,
    message: string,
    urgent: boolean = false
  ): void {
    const userNotifications = this.memory.get(userId);

    if (!this.validator.canSend(userId, type, urgent, userNotifications)) {
      return;
    }

    this.gateway.send(userId, message);

    const record = { type, timestamp: Date.now() };
    this.memory.add(userId, record);
  }
}
