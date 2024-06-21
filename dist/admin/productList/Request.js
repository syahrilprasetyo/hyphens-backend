"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productListRequest = void 0;
const runtypes_1 = require("runtypes");
const requeiredRequest = {
    startIndex: runtypes_1.Number,
    limit: runtypes_1.Number
};
const optionalRequest = {};
exports.productListRequest = (0, runtypes_1.Record)(requeiredRequest).And((0, runtypes_1.Partial)(optionalRequest));
