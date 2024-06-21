"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProductRequest = void 0;
const runtypes_1 = require("runtypes");
const requeiredRequest = {
    productName: runtypes_1.String,
    description: runtypes_1.String,
    discount: runtypes_1.String,
    finalPrice: runtypes_1.Number,
    stock: runtypes_1.Number,
    isActive: runtypes_1.String,
    image: runtypes_1.String,
};
const optionalRequest = {};
exports.addProductRequest = (0, runtypes_1.Record)(requeiredRequest).And((0, runtypes_1.Partial)(optionalRequest));
