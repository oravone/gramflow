"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bot = void 0;
const MessageService_1 = require("../message/MessageService");
const HttpClient_1 = require("../client/HttpClient");
const BotService_1 = require("../bot/BotService");
class Bot {
    constructor(token) {
        this.httpClient = new HttpClient_1.httpClient(token);
        this.messageService = new MessageService_1.MessageService(this.httpClient);
        this.botService = new BotService_1.BotService(this.httpClient);
    }
    async sendMessage(chatId, text) {
        await this.messageService.sendMessage(chatId, text);
    }
}
exports.Bot = Bot;
