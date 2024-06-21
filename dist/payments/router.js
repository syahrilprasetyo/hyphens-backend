"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentsRouter = void 0;
const express_1 = require("express");
const is_login_1 = require("../middleware/is_login");
const Controller_1 = __importDefault(require("./Controller"));
exports.paymentsRouter = (0, express_1.Router)();
exports.paymentsRouter.post('/', is_login_1.isSignIn, Controller_1.default);
