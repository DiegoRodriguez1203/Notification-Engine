"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Gateway_1 = require("./gateways/Gateway");
const NotificationValidator_1 = require("./services/NotificationValidator");
const NotificationService_1 = require("./services/NotificationService");
const NotificationMemory_1 = require("./services/NotificationMemory");
const NotificationWriter_1 = require("./services/NotificationWriter");
const NotificationLoader_1 = require("./services/NotificationLoader");
async function main() {
    // Inicializar servicios
    const gateway = new Gateway_1.Gateway();
    const validator = new NotificationValidator_1.NotificationValidator();
    const writer = new NotificationWriter_1.NotificationWriter();
    const memory = new NotificationMemory_1.NotificationMemory();
    const loader = new NotificationLoader_1.NotificationLoader(memory, writer);
    // ✅ Cargar notificaciones previas en memoria antes de usar el servicio
    await loader.initialize();
    // Crear el servicio principal de notificaciones
    const notificationService = new NotificationService_1.NotificationService(gateway, validator, memory, writer);
    // Ejemplo de envío de notificaciones
    notificationService.send("info", "user1", "Hello!");
    notificationService.send("info", "user1", "Second message");
    notificationService.send("info", "user1", "Third message");
    notificationService.send("info", "user1", "Fourth message", true);
}
// Ejecutar main y capturar errores inesperados
main().catch(error => {
    console.error("Unexpected error in notification service:", error);
});
