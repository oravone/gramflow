import { httpClient } from "../client/HttpClient";
import { GetMeResponse } from "./entities/getMe.types";
export declare class BotService {
    private readonly client;
    constructor(client: httpClient);
    getMe(): Promise<GetMeResponse>;
    setWebhook(options?: {
        url?: string;
        drop_pending_updates?: boolean;
        secret_token?: string;
    }): Promise<boolean>;
}
