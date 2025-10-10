import { Gateway } from "./gateways/Gateway";
import { NotificationValidator } from "./services/NotificationValidator";
import { NotificationService } from "./services/NotificationService";
import { NotificationMemory } from "./services/NotificationMemory";
import { NotificationWriter } from "./services/NotificationWriter";
import { NotificationLoader } from "./services/NotificationLoader";

async function main(): Promise<void> {
  const gateway = new Gateway();
  const validator = new NotificationValidator();
  const writer = new NotificationWriter();
  const memory = new NotificationMemory();
  const loader = new NotificationLoader(memory, writer);

  await loader.initialize();

  const notificationService = new NotificationService(gateway, validator, memory);

  notificationService.send("info", "user1", "Hello!");
  notificationService.send("info", "user1", "Second message");
  notificationService.send("info", "user1", "Third message");
  notificationService.send("info", "user1", "Fourth message", true);
}

main().catch(error => {
  throw error;
});
