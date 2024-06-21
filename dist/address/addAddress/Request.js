"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddAddressRequest = void 0;
const runtypes_1 = require("runtypes");
const requeiredRequest = {
    Auth: runtypes_1.String,
    fullName: runtypes_1.String,
    email: runtypes_1.String,
    address: runtypes_1.String,
    city: runtypes_1.String,
    country: runtypes_1.String,
    zipCode: runtypes_1.String,
    no_telp: runtypes_1.String
};
const optionalRequest = {};
exports.AddAddressRequest = (0, runtypes_1.Record)(requeiredRequest).And((0, runtypes_1.Partial)(optionalRequest));
