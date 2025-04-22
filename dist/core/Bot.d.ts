import { MessageService } from "../message/MessageService";
import { BotService } from "../bot/BotService";
export declare class Bot {
    readonly messageService: MessageService;
    readonly botService: BotService;
    private readonly httpClient;
    constructor(token: string);
}
