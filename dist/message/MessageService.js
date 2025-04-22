"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageService = void 0;
class MessageService {
    constructor(client) {
        this.client = client;
    }
    async sendMessage(chatId, text) {
        return this.client.request('sendMessage', {
            chat_id: Number(chatId),
            text: text
        });
    }
}
exports.MessageService = MessageService;
