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
const cart_table_1 = require("../common/models/tables/cart_table");
const checkout_table_1 = require("../common/models/tables/checkout_table");
const orders_table_1 = require("../common/models/tables/orders_table");
function orderService(payload) {
    return __awaiter(this, void 0, void 0, function* () {
        const { checkout_id, payment_methode_id, user, total_payment } = payload;
        if (!user) {
            throw new Error(`Customer not found`);
        }
        // Get the current date
        const currentDate = new Date();
        // Add one day to the current date
        const nextDay = new Date(currentDate);
        nextDay.setDate(currentDate.getDate() + 1);
        // Add the item to the cart
        const order = yield orders_table_1.OrdersTable.create({
            checkout_id,
            payment_methode_id,
            order_status: "wating_for_payment",
            total_payment,
            customer_id: user.userId,
            exp_date: nextDay
        });
        yield cart_table_1.CartTable.update({ status: "finished" }, {
            where: {
                customer_id: user.userId
            }
        });
        yield checkout_table_1.CheckoutTable.update({ status: "finished" }, {
            where: {
                customer_id: user.userId
            }
        });
        return {
            order_id: order.id
        };
    });
}
exports.default = orderService;
