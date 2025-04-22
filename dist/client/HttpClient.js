"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpClient = void 0;
const TelegramError_1 = require("../error/TelegramError");
const TelegramErrorMap_1 = require("../error/TelegramErrorMap");
class httpClient {
    constructor(token) {
        this.token = token;
    }
    async request(method, payload) {
        const res = await fetch(`https://api.telegram.org/bot${this.token}/${method}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });
        const json = await res.json();
        if (!json.ok) {
            const ErrorClass = TelegramErrorMap_1.telegramErrorMap[json.description];
            if (ErrorClass) {
                throw new ErrorClass();
            }
            throw new TelegramError_1.TelegramError(json.description, json.error_code);
        }
        else {
            return json.result;
        }
    }
}
exports.httpClient = httpClient;
