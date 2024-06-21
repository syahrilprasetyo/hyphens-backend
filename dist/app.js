"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// index.ts
const express_1 = __importDefault(require("express"));
const index_router_1 = require("./routers/index_router");
const db_config_1 = require("./config/db_config");
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const port = 8000;
const app = (0, express_1.default)();
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, db_config_1.setupAllTablesSetup)();
}))();
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use('', index_router_1.router);
app.get("/chats", (req, res) => {
    // Simulated chat data
    const chats = [
        {
            id: 1,
            user: "John Doe",
            lastMessage: "Hello there!",
            timestamp: "1 min ago",
        },
        {
            id: 2,
            user: "Alice Smith",
            lastMessage: "Sure, see you then.",
            timestamp: "3 hrs ago",
        },
        {
            id: 3,
            user: "Bob Johnson",
            lastMessage: "Thanks for the update.",
            timestamp: "1 day ago",
        },
    ];
    // Return the chats as JSON
    res.json(chats);
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
