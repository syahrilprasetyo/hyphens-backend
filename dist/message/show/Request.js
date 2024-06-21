"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showMessagesRequest = void 0;
const runtypes_1 = require("runtypes");
const requeiredRequest = {
    Auth: runtypes_1.String,
    room_chat_id: runtypes_1.Number,
};
const optionalRequest = {};
exports.showMessagesRequest = (0, runtypes_1.Record)(requeiredRequest).And((0, runtypes_1.Partial)(optionalRequest));
