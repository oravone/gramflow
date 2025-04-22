"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.telegramErrorMap = void 0;
const ChatNotFoundError_1 = require("./chat/ChatNotFoundError");
const UnauthorizedError_1 = require("./bot/UnauthorizedError");
exports.telegramErrorMap = {
    // 'Bad Request: chat_id is empty': EmptyChatIdError,
    'Bad Request: chat not found': ChatNotFoundError_1.ChatNotFoundError,
    'Unauthorized': UnauthorizedError_1.UnauthorizedError,
    // 'Bad Request: message text is empty': EmptyTextError,
    // 'Bad Request: reply markup is invalid': InvalidMarkupError,
};
