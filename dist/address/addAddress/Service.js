"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const address_tables_1 = require("../../common/models/tables/address_tables");
function orderService(payload) {
    return __awaiter(this, void 0, void 0, function* () {
        const { user, email, address, fullName, city, country, zipCode, no_telp } = payload;
        if (!user) {
            throw new Error(`Customer not found`);
        }
        const data = {
            "full_name": fullName,
            "email": email,
            "address": address,
            "city": city,
            "country": country,
            "zipCode": zipCode,
            "customer_id": user.userId,
            "no_telp": no_telp
        };
        yield address_tables_1.AddressTable.create(data);
        return {
            message: `successfully created`
        };
    });
}
exports.default = orderService;
