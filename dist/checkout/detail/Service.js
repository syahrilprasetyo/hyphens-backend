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
const sequelize_1 = require("sequelize");
const db_config_1 = require("../../config/db_config");
const checkout_table_1 = require("../../common/models/tables/checkout_table");
const address_tables_1 = require("../../common/models/tables/address_tables");
const courier_table_1 = require("../../common/models/tables/courier_table");
function checkoutDetailService(payload) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        const { user, } = payload;
        if (!user) {
            throw new Error(`user not founf`);
        }
        const dataCheckout = yield checkout_table_1.CheckoutTable.findOne({
            where: {
                customer_id: user.userId,
                status: "unfinished"
            },
            limit: 1
        });
        if (dataCheckout === null) {
            throw new Error(`checkout not found`);
        }
        const deliveryFee = yield courier_table_1.CourierTable.findOne({
            where: {
                id: (_a = dataCheckout.courier_id) !== null && _a !== void 0 ? _a : 0
            }
        });
        const productIdsFilter = yield db_config_1.dbConnection.query(`
      SELECT c.id as id, c.customer_id as customer_id,
        c.qty as qty,
        c.id AS id, 
        c.customer_id AS customer_id,
        c.product_id AS product_id,
        p.product_name AS product_name,
        p.regular_price AS regular_price,
        p.discount AS discount,
        p.final_price AS final_price,
        (SELECT url FROM products_image_tb WHERE product_id = p.id LIMIT 1) AS image
      FROM cart_tb as c
      INNER JOIN products_tb as p
      ON product_id = p.id 
      WHERE c.customer_id = ${user === null || user === void 0 ? void 0 : user.userId}
    `, { type: sequelize_1.QueryTypes.SELECT });
        const addressData = yield address_tables_1.AddressTable.findOne({
            where: {
                id: dataCheckout.address_id
            }
        });
        let address;
        address = {
            email: addressData === null || addressData === void 0 ? void 0 : addressData.email,
            noTelp: addressData === null || addressData === void 0 ? void 0 : addressData.no_telp,
            address: addressData === null || addressData === void 0 ? void 0 : addressData.address
        };
        if (addressData === null) {
            address = null;
        }
        return {
            checkoutId: dataCheckout.id,
            products: productIdsFilter,
            courier: '',
            address,
            deliveryFee: deliveryFee === null || deliveryFee === void 0 ? void 0 : deliveryFee.price,
            total_amount: parseInt((_b = dataCheckout.total_amount) !== null && _b !== void 0 ? _b : ''),
        };
    });
}
exports.default = checkoutDetailService;
