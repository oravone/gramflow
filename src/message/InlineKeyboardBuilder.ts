export type InlineButton = {
    text: string;
    url?: string;
    callback_data?: string;
};

export class InlineKeyboardBuilder {
    createInlineButton(text: string, action: { url?: string; callback_data?: string }): InlineButton {
        return {
            text,
            ...action,
        };
    }

    createInlineKeyboard(rows: InlineButton[][]) {
        return {
            reply_markup: {
                inline_keyboard: rows,
            },
        };
    }
}