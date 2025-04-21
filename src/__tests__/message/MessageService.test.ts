// src/services/__tests__/MessageService.test.ts
import nock from 'nock';
import {MessageService} from "../../message/MessageService";
import {httpClient} from "../../client/HttpClient";

describe('MessageService', () => {
    const fakeToken = '123:ABC';
    const telegramHost = 'https://api.telegram.org';

    let service: MessageService;

    beforeEach(() => {
        const client = new httpClient(fakeToken);
        service = new MessageService(client);
    });

    it('should send a message', async () => {
        const chatId = 123456789;
        const text = 'Hello, world!';

        nock(telegramHost)
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

        nock(telegramHost)
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
        } catch (err) {
            const error = err as Error;
            console.error(error);
            expect(error.message).toBe('Bad Request: chat not found');
        }
    });

    it('should throw if Telegram returns an error: Unauthorized', async () => {
        const chatId = 123456789;
        const text = 'Hello, world!';

        nock(telegramHost)
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
        } catch (err) {
            const error = err as Error;
            expect(error.message).toBe('Bad Request: chat not found');
        }
    });
});