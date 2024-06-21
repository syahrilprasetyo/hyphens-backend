"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addToCartRequest = void 0;
const runtypes_1 = require("runtypes");
const requeiredRequest = {
    Auth: runtypes_1.String,
    product_id: runtypes_1.Number,
    qty: runtypes_1.Number,
};
const optionalRequest = {};
exports.addToCartRequest = (0, runtypes_1.Record)(requeiredRequest).And((0, runtypes_1.Partial)(optionalRequest));
