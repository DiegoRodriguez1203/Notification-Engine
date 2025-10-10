export class Gateway {
  send(userId: string, message: string) {
    console.log(`Sending message to user ${userId}: "${message}"`);
  }
}
