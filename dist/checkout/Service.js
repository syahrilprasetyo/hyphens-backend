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
const checkout_table_1 = require("../common/models/tables/checkout_table");
function checkoutService(payload) {
    return __awaiter(this, void 0, void 0, function* () {
        const { cart_ids, receiver_id, courier_id, total_amount, user, address_id } = payload;
        if (!user) {
            throw new Error(`user not founf`);
        }
        const checkout = yield checkout_table_1.CheckoutTable.findOne({
            where: {
                customer_id: user.userId,
                status: "unfinished",
            },
            limit: 1
        });
        if (checkout !== null) {
            yield checkout_table_1.CheckoutTable.update({
                cart_ids: cart_ids,
                receiver_id: receiver_id,
                courier_id: courier_id,
                total_amount: total_amount,
                address_id: address_id
            }, {
                where: {
                    customer_id: user.userId,
                    status: "unfinished"
                },
            });
        }
        else {
            yield checkout_table_1.CheckoutTable.create({
                cart_ids,
                customer_id: user.userId,
                receiver_id,
                courier_id,
                total_amount,
                status: "unfinished"
            });
        }
        return {
            message: "Checkout successful",
        };
    });
}
exports.default = checkoutService;
