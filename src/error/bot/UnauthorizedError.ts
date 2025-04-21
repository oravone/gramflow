import {TelegramError} from "../TelegramError";

export class UnauthorizedError extends TelegramError {
    constructor() {
        super('Bot is unauthorized. You token is correct?', 401);
        this.name = 'UnauthorizedError';
    }
}