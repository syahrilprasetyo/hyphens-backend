"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dokterListRequest = void 0;
const runtypes_1 = require("runtypes");
const requeiredRequest = {
    Auth: runtypes_1.String,
    customerId: runtypes_1.Number
};
const optionalRequest = {};
exports.dokterListRequest = (0, runtypes_1.Record)(requeiredRequest).And((0, runtypes_1.Partial)(optionalRequest));
