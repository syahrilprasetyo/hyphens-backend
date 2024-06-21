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
exports.setupProductsTable = exports.ProductsTable = void 0;
const sequelize_1 = require("sequelize");
const db_config_1 = require("../../../config/db_config");
class ProductsTable extends sequelize_1.Model {
}
exports.ProductsTable = ProductsTable;
function setupProductsTable() {
    return __awaiter(this, void 0, void 0, function* () {
        ProductsTable.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                unique: true
            },
            product_name: {
                type: sequelize_1.DataTypes.STRING
            },
            regular_price: {
                type: sequelize_1.DataTypes.STRING
            },
            discount: {
                type: sequelize_1.DataTypes.STRING
            },
            final_price: {
                type: sequelize_1.DataTypes.STRING
            },
            image: {
                type: sequelize_1.DataTypes.STRING
            },
            qty: {
                type: sequelize_1.DataTypes.INTEGER
            },
            desc: {
                type: sequelize_1.DataTypes.TEXT
            },
            status: {
                type: sequelize_1.DataTypes.STRING
            },
            createdAt: {
                type: sequelize_1.DataTypes.DATE,
                defaultValue: sequelize_1.Sequelize.fn('NOW')
            },
            updatedAt: {
                type: sequelize_1.DataTypes.DATE,
                defaultValue: sequelize_1.Sequelize.fn('NOW')
            },
        }, {
            sequelize: db_config_1.dbConnection,
            timestamps: false,
            tableName: 'products_tb'
        });
        ProductsTable.sync();
    });
}
exports.setupProductsTable = setupProductsTable;
