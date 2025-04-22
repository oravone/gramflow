export declare class httpClient {
    private readonly token;
    constructor(token: string);
    request<T = any>(method: string, payload?: Record<string, any>): Promise<T>;
}
