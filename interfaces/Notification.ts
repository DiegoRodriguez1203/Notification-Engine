/*Urgency parameter added for important o  user-requested notifications
*/
export interface Notification {
  send(type: string, userId: string, message: string, urgent?:boolean): void;
}