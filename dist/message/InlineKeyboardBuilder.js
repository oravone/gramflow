"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineKeyboardBuilder = void 0;
class InlineKeyboardBuilder {
    createInlineButton(text, action) {
        return {
            text,
            ...action,
        };
    }
    createInlineKeyboard(rows) {
        return {
            reply_markup: {
                inline_keyboard: rows,
            },
        };
    }
}
exports.InlineKeyboardBuilder = InlineKeyboardBuilder;
