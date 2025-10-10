export interface Validator {
  canSend(userId: string, type: string,urgent?:boolean): boolean;
}