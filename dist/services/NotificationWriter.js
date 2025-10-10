"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationWriter = void 0;
const fs = __importStar(require("fs/promises"));
const path = __importStar(require("path"));
/**
 * Handles persistent storage of notifications.
 * Stores notifications grouped by userId.
 */
class NotificationWriter {
    constructor() {
        this.dir = path.join(__dirname, "../data");
        this.filePath = path.join(this.dir, "notifications.json");
    }
    /**
     * Writes the full FileRecords object to disk.
     * @param records - All notifications grouped by userId
     */
    async write(records) {
        try {
            await fs.mkdir(this.dir, { recursive: true });
            await fs.writeFile(this.filePath, JSON.stringify(records, null, 2), "utf-8");
        }
        catch (error) {
            console.error("Error writing notifications:", error);
        }
    }
    /**
     * Reads all notifications from disk.
     * @returns Notifications grouped by userId
     */
    async read() {
        try {
            const data = await fs.readFile(this.filePath, "utf-8");
            return data ? JSON.parse(data) : {};
        }
        catch {
            return {};
        }
    }
}
exports.NotificationWriter = NotificationWriter;
