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
function cartDetailService(payload) {
    return __awaiter(this, void 0, void 0, function* () {
        const { user } = payload;
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
      AND c.status = "active"
    `, { type: sequelize_1.QueryTypes.SELECT });
        return {
            products: productIdsFilter,
            customerId: user === null || user === void 0 ? void 0 : user.userId
        };
    });
}
exports.default = cartDetailService;
