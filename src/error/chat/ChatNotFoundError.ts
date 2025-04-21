import {TelegramError} from "../TelegramError";


export class ChatNotFoundError extends TelegramError {
    constructor() {
        super('Bad Request: chat not found', 404);
        this.name = 'ChatNotFoundError';
    }
}