"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkoutRequest = void 0;
const runtypes_1 = require("runtypes");
const requeiredRequest = {
    Auth: runtypes_1.String
};
const optionalRequest = {
    cart_ids: runtypes_1.String,
    receiver_id: runtypes_1.Number,
    courier_id: runtypes_1.Number,
    delivery_fee: runtypes_1.String,
    total_amount: runtypes_1.String,
    address_id: runtypes_1.Number,
};
exports.checkoutRequest = (0, runtypes_1.Record)(requeiredRequest).And((0, runtypes_1.Partial)(optionalRequest));
