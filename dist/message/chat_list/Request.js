"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatListRequest = void 0;
const runtypes_1 = require("runtypes");
const requeiredRequest = {
    Auth: runtypes_1.String,
};
const optionalRequest = {
    customerId: runtypes_1.Number.Or(runtypes_1.Null),
    dokterId: runtypes_1.Number.Or(runtypes_1.Null),
};
exports.chatListRequest = (0, runtypes_1.Record)(requeiredRequest).And((0, runtypes_1.Partial)(optionalRequest));
