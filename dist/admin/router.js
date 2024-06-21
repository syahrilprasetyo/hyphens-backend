"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminRouter = void 0;
const express_1 = require("express");
const Controller_1 = __importDefault(require("./productList/Controller"));
const Controller_2 = __importDefault(require("./addProduct/Controller"));
const Controller_3 = __importDefault(require("./orderDetail/Controller"));
const Controller_4 = __importDefault(require("./orderDetail/Controller"));
exports.adminRouter = (0, express_1.Router)();
exports.adminRouter.post('/ProductList', Controller_1.default);
exports.adminRouter.post('/AddProduct', Controller_2.default);
exports.adminRouter.post('/OrderList', Controller_3.default);
exports.adminRouter.post('/OrderDetail', Controller_4.default);
