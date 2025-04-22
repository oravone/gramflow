"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BotService = void 0;
class BotService {
    constructor(client) {
        this.client = client;
    }
    async getMe() {
        return this.client.request('getMe');
    }
    ;
    async setWebhook(options) {
        return this.client.request('setWebhook', options);
    }
}
exports.BotService = BotService;
