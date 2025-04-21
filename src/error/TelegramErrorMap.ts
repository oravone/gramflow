import {TelegramError} from "./TelegramError";
import {ChatNotFoundError} from "./chat/ChatNotFoundError";
import {UnauthorizedError} from "./bot/UnauthorizedError";

export const telegramErrorMap: Record<string, new () => TelegramError> = {
    // 'Bad Request: chat_id is empty': EmptyChatIdError,
    'Bad Request: chat not found': ChatNotFoundError,
    'Unauthorized': UnauthorizedError,
    // 'Bad Request: message text is empty': EmptyTextError,
    // 'Bad Request: reply markup is invalid': InvalidMarkupError,
};