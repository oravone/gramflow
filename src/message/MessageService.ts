import {httpClient} from "../client/HttpClient";

export class MessageService {
    constructor( private readonly client: httpClient ) {}

    async sendMessage(chatId: number | string, text: string, replyMarkup?: any): Promise<any> {
        return this.client.request('sendMessage', {
            chat_id: Number(chatId),
            text: text,
            reply_markup: replyMarkup,
        })
    }
}