"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderListRequest = void 0;
const runtypes_1 = require("runtypes");
const requeiredRequest = {};
const optionalRequest = {};
exports.orderListRequest = (0, runtypes_1.Record)(requeiredRequest).And((0, runtypes_1.Partial)(optionalRequest));
