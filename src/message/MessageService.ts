import {httpClient} from "../Client/Client";

export class MessageService {
    constructor( private readonly client: httpClient ) {}

    async sendMessage(chatId: number, text: string) {
        return this.client.request('sendMessage', {
            chatId: chatId,
            text: text
        })
    }
}