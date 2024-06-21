"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRequest = void 0;
const runtypes_1 = require("runtypes");
const requeiredRequest = {
    Auth: runtypes_1.String,
    checkout_id: runtypes_1.Number,
    payment_methode_id: runtypes_1.Number,
    total_payment: runtypes_1.Number,
};
const optionalRequest = {};
exports.orderRequest = (0, runtypes_1.Record)(requeiredRequest).And((0, runtypes_1.Partial)(optionalRequest));
