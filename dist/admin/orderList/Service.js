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
const orders_table_1 = require("../../common/models/tables/orders_table");
const customer_table_1 = require("../../common/models/tables/customer_table");
const bank_tables_1 = require("../../common/models/tables/bank_tables");
function orderListService(payload) {
    return __awaiter(this, void 0, void 0, function* () {
        const { rows, count } = yield orders_table_1.OrdersTable.findAndCountAll({
            attributes: ['id', 'total_payment', 'order_status', 'createdAt'],
            include: [
                {
                    model: customer_table_1.CustomersTable,
                    as: 'customer',
                    attributes: ['name', 'email', 'phone_number'],
                },
                {
                    model: bank_tables_1.BanksTable,
                    as: 'bank',
                    attributes: ['bank_name'],
                },
            ],
        });
        return {
            orderList: rows,
            total_orders: count
        };
    });
}
exports.default = orderListService;
