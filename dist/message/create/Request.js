"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMessagesRequest = void 0;
const runtypes_1 = require("runtypes");
const requeiredRequest = {
    Auth: runtypes_1.String,
};
const optionalRequest = {
    customerId: runtypes_1.Number.Or(runtypes_1.Null),
    dokterId: runtypes_1.Number.Or(runtypes_1.Null),
    sender: runtypes_1.String.Or(runtypes_1.Null),
    message: runtypes_1.String,
    roomChatId: runtypes_1.Number.Or(runtypes_1.Null)
};
exports.createMessagesRequest = (0, runtypes_1.Record)(requeiredRequest).And((0, runtypes_1.Partial)(optionalRequest));
