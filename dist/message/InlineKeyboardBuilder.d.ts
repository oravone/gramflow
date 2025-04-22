export type InlineButton = {
    text: string;
    url?: string;
    callback_data?: string;
};
export declare class InlineKeyboardBuilder {
    createInlineButton(text: string, action: {
        url?: string;
        callback_data?: string;
    }): InlineButton;
    createInlineKeyboard(rows: InlineButton[][]): {
        reply_markup: {
            inline_keyboard: InlineButton[][];
        };
    };
}
