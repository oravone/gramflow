import {httpClient} from "../client/HttpClient";

export class MessageService {
    constructor( private readonly client: httpClient ) {}

    async sendMessage(chatId: number | string, text: string) {
        return this.client.request('sendMessage', {
            chat_id: Number(chatId),
            text: text
        })
    }
}