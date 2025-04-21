import {httpClient} from "../client/HttpClient";

export class MessageService {
    constructor( private readonly client: httpClient ) {}

    async sendMessage(chatId: number, text: string) {
        return this.client.request('sendMessage', {
            chat_id: chatId,
            text: text
        })
    }
}