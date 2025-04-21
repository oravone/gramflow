export class httpClient {
    constructor(private readonly token: string) {
    }

    public async request<T = any>(method: string, payload: Record<string, any>): Promise<T> {
        const res = await fetch(`https://api.telegram.org/bot${this.token}/${method}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });

        const json = await res.json();
        if (!json.ok) throw new Error(json.description);
        return json.result;
    }
}