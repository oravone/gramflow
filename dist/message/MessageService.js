"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageService = void 0;
class MessageService {
    constructor(client) {
        this.client = client;
    }
    async sendMessage(chatId, text, replyMarkup) {
        return this.client.request('sendMessage', {
            chat_id: Number(chatId),
            text: text,
            reply_markup: replyMarkup,
        });
    }
}
exports.MessageService = MessageService;
