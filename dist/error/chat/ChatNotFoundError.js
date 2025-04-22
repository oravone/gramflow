"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatNotFoundError = void 0;
const TelegramError_1 = require("../TelegramError");
class ChatNotFoundError extends TelegramError_1.TelegramError {
    constructor() {
        super('Bad Request: chat not found', 404);
        this.name = 'ChatNotFoundError';
    }
}
exports.ChatNotFoundError = ChatNotFoundError;
