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
const cart_table_1 = require("../../common/models/tables/cart_table");
function addToCartService(payload) {
    return __awaiter(this, void 0, void 0, function* () {
        const { product_id, user, qty } = payload;
        if (!user) {
            throw new Error(`Customer not found`);
        }
        // Check if the product exists (you may need to fetch the product from your database)
        // Add the item to the cart
        const cartItem = yield cart_table_1.CartTable.create({
            customer_id: user === null || user === void 0 ? void 0 : user.userId,
            product_id,
            qty,
            status: 'active'
        });
        return {
            message: `product berhasil di tambahkan`
        };
    });
}
exports.default = addToCartService;
