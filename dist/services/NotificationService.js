"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationService = void 0;
class NotificationService {
    constructor(gateway, validator, memory, writer) {
        this.gateway = gateway;
        this.validator = validator;
        this.memory = memory;
        this.writer = writer;
    }
    /**
     * Sends a notification to a user if allowed by the validator.
     * Persists the notification in memory and on disk.
     */
    send(type, userId, message, urgent = false) {
        // Obtiene las notificaciones previas del usuario
        const userNotifications = this.memory.get(userId);
        // Verifica si se puede enviar según las reglas del validador
        const canSend = this.validator.canSend(userId, type, urgent, userNotifications);
        if (!canSend) {
            console.log(`Notificación ${type} a ${userId} bloqueada por el validador`);
            return;
        }
        // Envía la notificación a través del gateway
        this.gateway.send(userId, message);
        // Crea el registro de la notificación
        const record = { type, timestamp: Date.now() };
        // Lo agrega a la memoria
        this.memory.add(userId, record);
        // Persiste toda la memoria en el archivo
        console.log(`Notificación ${type} enviada a ${userId}`);
    }
}
exports.NotificationService = NotificationService;
