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
        const { user } = payload;
        const addressData = yield address_tables_1.AddressTable.findAll({
            where: {
                customer_id: user === null || user === void 0 ? void 0 : user.userId
            },
            raw: true
        });
        let data = [];
        if (addressData) {
            data = addressData.map((address) => {
                return {
                    id: address.id,
                    fullName: address.full_name,
                    noTelp: address.no_telp,
                    email: address.email,
                    address: address.address,
                    city: address.city,
                    country: address.country,
                    zipCode: address.zipCode
                };
            });
        }
        return {
            address: data
        };
    });
}
exports.default = orderService;
