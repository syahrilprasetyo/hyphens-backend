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
const bank_tables_1 = require("../../common/models/tables/bank_tables");
const orders_table_1 = require("../../common/models/tables/orders_table");
function orderReceiptService(payload) {
    return __awaiter(this, void 0, void 0, function* () {
        const { user, order_id } = payload;
        if (!user) {
            throw new Error("User not found");
        }
        const data = yield orders_table_1.OrdersTable.findOne({
            where: {
                customer_id: user.userId,
                id: order_id
            }
        });
        const bank = yield bank_tables_1.BanksTable.findOne({
            where: {
                id: data === null || data === void 0 ? void 0 : data.payment_methode_id
            }
        });
        return {
            total_amount: data === null || data === void 0 ? void 0 : data.total_payment,
            exp_date: data === null || data === void 0 ? void 0 : data.exp_date,
            bank_name: bank === null || bank === void 0 ? void 0 : bank.bank_name,
            no_rek: bank === null || bank === void 0 ? void 0 : bank.no_rek
        };
    });
}
exports.default = orderReceiptService;
