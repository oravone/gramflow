"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnauthorizedError = void 0;
const TelegramError_1 = require("../TelegramError");
class UnauthorizedError extends TelegramError_1.TelegramError {
    constructor() {
        super('Bot is unauthorized. You token is correct?', 401);
        this.name = 'UnauthorizedError';
    }
}
exports.UnauthorizedError = UnauthorizedError;
