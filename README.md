# Notification System (Summary)

A TypeScript notification system*

## Notification Flow

1. Memory is loaded from disk using `NotificationLoader` (**asynchronous**).  
2. Notification eligibility is validated (`NotificationValidator`).  
3. If valid, it is sent via the `Gateway`.  
4. Notification is recorded in memory and optionally persisted to disk.

---

### Gateway

- Currently a stub that simulates sending messages.
- Replace with a real production gateway (email, push, SMS) with retries and logging.

### Main / Index

- Should integrate a professional logger and environment configuration.
- Memory initialization and persistence should complete before processing real notifications.

---

## Setup and Running

### Install dependencies

```bash
npm install
### Run program
tsc 
npm start
