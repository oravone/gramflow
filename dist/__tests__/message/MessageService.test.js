"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/services/__tests__/MessageService.test.ts
const nock_1 = __importDefault(require("nock"));
const MessageService_1 = require("../../message/MessageService");
const HttpClient_1 = require("../../client/HttpClient");
describe('MessageService', () => {
    const fakeToken = '123:ABC';
    const telegramHost = 'https://api.telegram.org';
    let service;
    beforeEach(() => {
        const client = new HttpClient_1.httpClient(fakeToken);
        service = new MessageService_1.MessageService(client);
    });
    it('should send a message', async () => {
        const chatId = 123456789;
        const text = 'Hello, world!';
        (0, nock_1.default)(telegramHost)
            .post(`/bot${fakeToken}/sendMessage`, {
            chat_id: chatId,
            text: text,
        })
            .reply(200, {
            ok: true,
            result: { message_id: 42, text },
        });
        const response = await service.sendMessage(chatId, text);
        console.log(response);
        expect(response.message_id).toBe(42);
        expect(response.text).toBe(text);
    });
    it('should throw if Telegram returns an error: Chat not found', async () => {
        const chatId = 123456789;
        const text = 'Hello, world!';
        (0, nock_1.default)(telegramHost)
            .post(`/bot${fakeToken}/sendMessage`, {
            chat_id: chatId,
            text: text,
        })
            .reply(200, {
            ok: false,
            error_code: 404,
            description: 'Bad Request: chat not found'
        });
        try {
            await service.sendMessage(chatId, text);
        }
        catch (err) {
            const error = err;
            console.error(error);
            expect(error.message).toBe('Bad Request: chat not found');
        }
    });
    it('should throw if Telegram returns an error: Unauthorized', async () => {
        const chatId = 123456789;
        const text = 'Hello, world!';
        (0, nock_1.default)(telegramHost)
            .post(`/bot${fakeToken}/sendMessage`, {
            chat_id: chatId,
            text: text,
        })
            .reply(200, {
            ok: false,
            error_code: 401,
            description: 'Unauthorized'
        });
        try {
            await service.sendMessage(chatId, text);
        }
        catch (err) {
            const error = err;
            expect(error.message).toBe('Bad Request: chat not found');
        }
    });
});
