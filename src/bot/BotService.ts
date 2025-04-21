import {httpClient} from "../client/HttpClient";
import {GetMeResponse} from "./entities/getMe.types";

export class BotService {
    constructor( private readonly client: httpClient ) {}

    async getMe(): Promise<GetMeResponse> {
        return this.client.request('getMe');
    };

    async setWebhook(options?: {
        url?: string,
        drop_pending_updates?: boolean,
        secret_token?: string
    }): Promise<boolean> {
        return this.client.request('setWebhook', options);
    }
}