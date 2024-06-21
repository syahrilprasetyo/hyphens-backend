"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderDetailRequest = void 0;
const runtypes_1 = require("runtypes");
const requeiredRequest = {
    order_id: runtypes_1.Number
};
const optionalRequest = {};
exports.orderDetailRequest = (0, runtypes_1.Record)(requeiredRequest).And((0, runtypes_1.Partial)(optionalRequest));
