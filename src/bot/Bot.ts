import {MessageService} from "../message/MessageService";
import {httpClient} from "../Client/Client";

export class Bot {
    public readonly messageService: MessageService;

    private readonly httpClient: httpClient;

    constructor(token: string) {
        this.httpClient = new httpClient(token);

        this.messageService = new MessageService(this.httpClient);
    }
}