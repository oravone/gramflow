import nock from 'nock';
import {httpClient} from "../../client/HttpClient";
import {BotService} from "../../bot/BotService";
import {UnauthorizedError} from "../../error/bot/UnauthorizedError";

describe('BotService Test', () => {
    const fakeToken = '123:ABC';
    const telegramHost = 'https://api.telegram.org';

    let botService: BotService;

    beforeEach(() => {
        const client = new httpClient(fakeToken);
        botService = new BotService(client);
    });

    it('getMe true', async () => {
        nock(telegramHost)
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
        nock(telegramHost)
            .post(`/bot${fakeToken}/getMe`)
            .reply(401, {
                "ok": false,
                "error_code": 401,
                "description": "Unauthorized"
            });

        await expect(botService.getMe()).rejects.toThrow(UnauthorizedError);
    });

    it('setWebhook true', async () => {
        nock(telegramHost)
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
        nock(telegramHost)
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
        nock(telegramHost)
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
        nock(telegramHost)
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