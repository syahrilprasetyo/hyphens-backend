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
const products_table_1 = require("../../common/models/tables/products_table");
const product_images_tables_1 = require("../../common/models/tables/product_images_tables");
function productDetailService(payload) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const { productId } = payload;
        if (productId === "") {
            throw new Error("Product Id not found");
        }
        const product = yield products_table_1.ProductsTable.findOne({
            where: {
                id: productId
            }
        });
        if (product == null) {
            throw new Error("Product not found");
        }
        const images = yield product_images_tables_1.ProductImagesTable.findAll({
            where: {
                product_id: productId
            },
            raw: true
        });
        const data = {
            product: {
                name: product.product_name,
                regularPrice: product.regular_price,
                discount: (_a = product.discount) !== null && _a !== void 0 ? _a : 0,
                finalPrice: product.final_price,
                images: images,
                desc: product.desc
            }
        };
        return data;
    });
}
exports.default = productDetailService;
