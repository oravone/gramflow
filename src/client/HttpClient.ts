import {TelegramError} from "../error/TelegramError";
import {telegramErrorMap} from "../error/TelegramErrorMap";

export class httpClient {
    constructor(private readonly token: string) {
    }

    public async request<T = any>(method: string, payload?: Record<string, any>): Promise<T> {
        const res = await fetch(`https://api.telegram.org/bot${this.token}/${method}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });
        const json = await res.json();

        if (!json.ok) {
            const ErrorClass = telegramErrorMap[json.description];
            if (ErrorClass) {
                throw new ErrorClass();
            }
            throw new TelegramError(json.description, json.error_code);
        } else {
            return json.result;
        }
    }
}