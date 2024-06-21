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
exports.setupOrdersTable = exports.OrdersTable = void 0;
const sequelize_1 = require("sequelize");
const db_config_1 = require("../../../config/db_config");
class OrdersTable extends sequelize_1.Model {
}
exports.OrdersTable = OrdersTable;
function setupOrdersTable() {
    return __awaiter(this, void 0, void 0, function* () {
        OrdersTable.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                unique: true
            },
            checkout_id: {
                type: sequelize_1.DataTypes.INTEGER,
            },
            payment_methode_id: {
                type: sequelize_1.DataTypes.INTEGER,
            },
            order_status: {
                type: sequelize_1.DataTypes.STRING,
            },
            total_payment: {
                type: sequelize_1.DataTypes.INTEGER
            },
            createdAt: {
                type: sequelize_1.DataTypes.DATE,
                defaultValue: sequelize_1.Sequelize.fn('NOW')
            },
            updatedAt: {
                type: sequelize_1.DataTypes.DATE,
                defaultValue: sequelize_1.Sequelize.fn('NOW')
            },
            customer_id: {
                type: sequelize_1.DataTypes.INTEGER
            },
            exp_date: {
                type: sequelize_1.DataTypes.DATE,
            }
        }, {
            sequelize: db_config_1.dbConnection,
            timestamps: false,
            tableName: 'orders_tb'
        });
        OrdersTable.sync();
    });
}
exports.setupOrdersTable = setupOrdersTable;
