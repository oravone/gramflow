export class TelegramError extends Error {
    constructor(
        public readonly description: string, //@ts-ignore
        public readonly errorCode: number
    ) {
        super(description);
        this.name = 'TelegramError';
    }
}