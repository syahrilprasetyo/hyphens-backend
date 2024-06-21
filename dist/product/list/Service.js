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
const products_table_1 = require("../../common/models/tables/products_table");
function productListService() {
    return __awaiter(this, void 0, void 0, function* () {
        const products = yield products_table_1.ProductsTable.findAll();
        const query = `
     SELECT
     *,
      (
        SELECT
          products_image_tb.url
        FROM
          products_image_tb
        WHERE
          products_image_tb.product_id = products_tb.id
        LIMIT 1
      ) AS imageUrl
       
    FROM
      products_tb
  `;
        const results = yield db_config_1.dbConnection.query(query, {
            type: sequelize_1.QueryTypes.SELECT,
        });
        const data = {
            products: results.map(data => {
                var _a;
                return {
                    id: String(data.id),
                    name: data.product_name,
                    regularPrice: data.regular_price,
                    discount: (_a = data.discount) !== null && _a !== void 0 ? _a : 0,
                    finalPrice: data.final_price,
                    image: data.imageUrl
                };
            })
        };
        return data;
    });
}
exports.default = productListService;
