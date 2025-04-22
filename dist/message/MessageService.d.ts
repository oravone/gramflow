import { httpClient } from "../client/HttpClient";
export declare class MessageService {
    private readonly client;
    constructor(client: httpClient);
    sendMessage(chatId: number, text: string): Promise<any>;
}
