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
exports.setupCheckoutTable = exports.CheckoutTable = void 0;
const sequelize_1 = require("sequelize");
const db_config_1 = require("../../../config/db_config");
class CheckoutTable extends sequelize_1.Model {
}
exports.CheckoutTable = CheckoutTable;
function setupCheckoutTable() {
    return __awaiter(this, void 0, void 0, function* () {
        CheckoutTable.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                unique: true
            },
            customer_id: {
                type: sequelize_1.DataTypes.INTEGER,
            },
            cart_ids: {
                type: sequelize_1.DataTypes.STRING,
            },
            receiver_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true
            },
            courier_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true
            },
            total_amount: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true
            },
            address_id: {
                type: sequelize_1.DataTypes.INTEGER,
            },
            status: {
                type: sequelize_1.DataTypes.STRING,
            }
        }, {
            sequelize: db_config_1.dbConnection,
            timestamps: false,
            tableName: 'checkout_tb'
        });
        CheckoutTable.sync();
    });
}
exports.setupCheckoutTable = setupCheckoutTable;
