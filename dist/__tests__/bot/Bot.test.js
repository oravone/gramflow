"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nock_1 = __importDefault(require("nock"));
const HttpClient_1 = require("../../client/HttpClient");
const BotService_1 = require("../../bot/BotService");
const UnauthorizedError_1 = require("../../error/bot/UnauthorizedError");
describe('BotService Test', () => {
    const fakeToken = '123:ABC';
    const telegramHost = 'https://api.telegram.org';
    let botService;
    beforeEach(() => {
        const client = new HttpClient_1.httpClient(fakeToken);
        botService = new BotService_1.BotService(client);
    });
    it('getMe true', async () => {
        (0, nock_1.default)(telegramHost)
            .post(`/bot${fakeToken}/getMe`)
            .reply(200, {
            "ok": true,
            "result": {
                "id": 123,
                "is_bot": true,
                "first_name": "Bot Name",
                "username": "Bot Username",
                "can_join_groups": true,
                "can_read_all_group_messages": false,
                "supports_inline_queries": false,
                "can_connect_to_business": false,
                "has_main_web_app": false
            }
        });
        const result = await botService.getMe();
        expect(result.id).toBe(123);
    });
    it('Unauthorized Error', async () => {
        (0, nock_1.default)(telegramHost)
            .post(`/bot${fakeToken}/getMe`)
            .reply(401, {
            "ok": false,
            "error_code": 401,
            "description": "Unauthorized"
        });
        await expect(botService.getMe()).rejects.toThrow(UnauthorizedError_1.UnauthorizedError);
    });
    it('setWebhook true', async () => {
        (0, nock_1.default)(telegramHost)
            .post(`/bot${fakeToken}/setWebhook`)
            .reply(200, {
            "ok": true,
            "result": true,
            "description": "Webhook was set"
        });
        const result = await botService.setWebhook({
            url: 'https://example.com/webhook',
        });
        expect(result).toBe(true);
    });
    it('setWebhook EmptyUrl', async () => {
        (0, nock_1.default)(telegramHost)
            .post(`/bot${fakeToken}/setWebhook`)
            .reply(200, {
            "ok": true,
            "result": true,
            "description": "Webhook is deleted"
        });
        const result = await botService.setWebhook();
        expect(result).toBe(true);
    });
    it('setWebhook with drop pending updates ', async () => {
        (0, nock_1.default)(telegramHost)
            .post(`/bot${fakeToken}/setWebhook`, {
            url: 'https://example.com/webhook',
            drop_pending_updates: true,
        })
            .reply(200, {
            "ok": true,
            "result": true,
            "description": "Webhook was set"
        });
        const result = await botService.setWebhook({
            url: 'https://example.com/webhook',
            drop_pending_updates: true,
        });
        expect(result).toBe(true);
    });
    it('setWebhook with secret token ', async () => {
        (0, nock_1.default)(telegramHost)
            .post(`/bot${fakeToken}/setWebhook`, {
            url: 'https://example.com/webhook',
            secret_token: "secret_token",
        })
            .reply(200, {
            "ok": true,
            "result": true,
            "description": "Webhook was set"
        });
        const result = await botService.setWebhook({
            url: 'https://example.com/webhook',
            secret_token: "secret_token"
        });
        expect(result).toBe(true);
    });
});
