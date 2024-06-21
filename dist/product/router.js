"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const express_1 = require("express");
const Controller_1 = __importDefault(require("./list/Controller"));
const Controller_2 = __importDefault(require("./detail/Controller"));
exports.productRouter = (0, express_1.Router)();
exports.productRouter.post('/List', Controller_1.default);
exports.productRouter.post('/Detail', Controller_2.default);
