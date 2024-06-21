"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productDetailRequest = void 0;
const runtypes_1 = require("runtypes");
const requeiredRequest = {
    productId: runtypes_1.String
};
const optionalRequest = {};
exports.productDetailRequest = (0, runtypes_1.Record)(requeiredRequest).And((0, runtypes_1.Partial)(optionalRequest));
