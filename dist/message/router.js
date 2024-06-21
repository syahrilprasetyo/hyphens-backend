"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageRouter = void 0;
const express_1 = require("express");
const controller_1 = __importDefault(require("./show/controller"));
const controller_2 = __importDefault(require("./create/controller"));
const controller_3 = __importDefault(require("./chat_list/controller"));
const controller_4 = __importDefault(require("./dokter_list.ts/controller"));
exports.messageRouter = (0, express_1.Router)();
exports.messageRouter.post('/ShowMessages', controller_1.default);
exports.messageRouter.post('/Create', controller_2.default);
exports.messageRouter.post('/ChatList', controller_3.default);
exports.messageRouter.post('/DokterList', controller_4.default);
