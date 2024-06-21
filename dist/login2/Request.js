"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRequest = void 0;
const runtypes_1 = require("runtypes");
const requeiredRequest = {
    email: runtypes_1.String,
    password: runtypes_1.String
};
const optionalRequest = {};
exports.loginRequest = (0, runtypes_1.Record)(requeiredRequest).And((0, runtypes_1.Partial)(optionalRequest));
