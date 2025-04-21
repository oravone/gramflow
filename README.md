# 🌐 gramflow · Telegram Bot SDK for TypeScript

[![npm version](https://img.shields.io/npm/v/@oravone/gramflow?color=%2300aced&logo=npm&style=flat-square)](https://www.npmjs.com/package/@oravone/gramflow)
[![GitHub license](https://img.shields.io/github/license/oravone/gramflow?style=flat-square)](LICENSE)
[![Made by Oravone](https://img.shields.io/badge/made%20by-Oravone-%23ff69b4?style=flat-square)](https://github.com/oravone)

**gramflow** is a modular, lightweight SDK to simplify building and managing Telegram bots in TypeScript and Node.js.  
Designed with scalability and modern development tools in mind.

---

## 📦 Installation

From **npm**:

```bash
 npm install @oravone/gramflow
```
From GitHub Packages:

```bash
 npm install @oravone/gramflow --registry=https://npm.pkg.github.com
```
⸻

🚀 Quick Start
```ts
import { TelegramBot } from '@oravone/gramflow';

const bot = new TelegramBot('YOUR_BOT_TOKEN');

await bot.sendMessage({
  chat_id: 123456789,
  text: 'Hello from gramflow 🚀',
});
```
---
###  🧩 Features
	•	🔐 Token-based bot creation
	•	📬 Easy message sending
	•	🖊 Planned support for editing messages, buttons, and webhooks
	•	🔁 Ready for NestJS microservice integration
	•	🧱 Built with modular structure for expansion
---
###  🗺 Roadmap
	•	Bot class with sendMessage
	•	Edit and delete message support
	•	Inline keyboard builder
	•	Webhook + polling interface
	•	Incoming update handlers
	•	Built-in rate limiter
---
### 📚 Usage Scenarios

| Use Case           | Status |
|--------------------|--------|
| Send simple text   | ✅      |
| Send with markup   | 🕐     |
| Scheduled delivery | 🕐     |
| NestJS Integration | ✅      |
| Webhook handler    | 🕐     |
---
### 👨‍💻 Example Project
👉 Coming soon: nest-gramflow-template
### 🧪 Development
```bash
 git clone https://github.com/oravone/gramflow
 cd gramflow
 npm install
 npm run build
```
---
### ⚖ License
MIT © 2025 Oravone

---
Built with 💛 by @dkarputs and the Oravone team.
---