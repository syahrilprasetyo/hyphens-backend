"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkoutDetailRequest = void 0;
const runtypes_1 = require("runtypes");
const requeiredRequest = {
    Auth: runtypes_1.String
};
const optionalRequest = {};
exports.checkoutDetailRequest = (0, runtypes_1.Record)(requeiredRequest).And((0, runtypes_1.Partial)(optionalRequest));
