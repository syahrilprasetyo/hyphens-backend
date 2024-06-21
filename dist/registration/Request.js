"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registrationRequest = void 0;
const runtypes_1 = require("runtypes");
const requeiredRequest = {
    name: runtypes_1.String,
    username: runtypes_1.String,
    email: runtypes_1.String,
    password: runtypes_1.String,
    type: runtypes_1.String,
};
const optionalRequest = {};
exports.registrationRequest = (0, runtypes_1.Record)(requeiredRequest).And((0, runtypes_1.Partial)(optionalRequest));
