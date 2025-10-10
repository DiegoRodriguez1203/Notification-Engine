/*
* Configuration table to control the notifications per minute/hour
*/ 

export const intervals = {
  news: { max: 10, minutes: 30 },
  info: { max: 5, minutes: 1 },
  marketing: { max: 5, minutes: 60 },
  status: { max: 20, minutes: 5 }
} as const;

export const maxTotal24h = 2;

export type NotificationType = keyof typeof intervals;
