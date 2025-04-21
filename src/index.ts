export class TelegramClient {
    constructor(private readonly token: string) {}

    async sendMessage(chatId: number, text: string) {
        const res = await fetch(`https://api.telegram.org/bot${this.token}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chat_id: chatId, text }),
        });

        return res.json();
    }
}