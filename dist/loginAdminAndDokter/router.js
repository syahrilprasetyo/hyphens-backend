"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginDokterRouter = void 0;
const express_1 = require("express");
const Controller_1 = __importDefault(require("./Controller"));
exports.loginDokterRouter = (0, express_1.Router)();
exports.loginDokterRouter.post('/', Controller_1.default);
