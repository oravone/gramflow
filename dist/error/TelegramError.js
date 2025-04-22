"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelegramError = void 0;
class TelegramError extends Error {
    constructor(description, //@ts-ignore
    errorCode) {
        super(description);
        this.description = description;
        this.errorCode = errorCode;
        this.name = 'TelegramError';
    }
}
exports.TelegramError = TelegramError;
