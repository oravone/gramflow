import {MessageService} from "../message/MessageService";
import {httpClient} from "../client/HttpClient";
import {BotService} from "../bot/BotService";

export class Bot {
    public readonly messageService: MessageService;
    public readonly botService: BotService;

    private readonly httpClient: httpClient;

    constructor(token: string) {
        this.httpClient = new httpClient(token);

        this.messageService = new MessageService(this.httpClient);
        this.botService = new BotService(this.httpClient);
    }

    public async sendMessage(chatId: number | string, text: string): Promise<void> {
        await this.messageService.sendMessage(chatId, text);
    }
}