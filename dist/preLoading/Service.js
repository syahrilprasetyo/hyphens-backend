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
const customer_table_1 = require("../common/models/tables/customer_table");
function preLoadingService(payload) {
    return __awaiter(this, void 0, void 0, function* () {
        const { user } = payload;
        const dataCustomer = yield customer_table_1.CustomersTable.findOne({
            where: {
                id: user === null || user === void 0 ? void 0 : user.userId
            }
        });
        return {
            name: dataCustomer === null || dataCustomer === void 0 ? void 0 : dataCustomer.name,
            image: dataCustomer === null || dataCustomer === void 0 ? void 0 : dataCustomer.imageUrl
        };
    });
}
exports.default = preLoadingService;
