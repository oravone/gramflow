export declare class TelegramError extends Error {
    readonly description: string;
    readonly errorCode: number;
    constructor(description: string, //@ts-ignore
    errorCode: number);
}
