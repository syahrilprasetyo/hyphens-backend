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
exports.setupCustomersTable = exports.CustomersTable = void 0;
const sequelize_1 = require("sequelize");
const db_config_1 = require("../../../config/db_config");
class CustomersTable extends sequelize_1.Model {
}
exports.CustomersTable = CustomersTable;
function setupCustomersTable() {
    return __awaiter(this, void 0, void 0, function* () {
        CustomersTable.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                unique: true
            },
            name: {
                type: sequelize_1.DataTypes.STRING
            },
            username: {
                type: sequelize_1.DataTypes.STRING
            },
            email: {
                type: sequelize_1.DataTypes.STRING
            },
            password: {
                type: sequelize_1.DataTypes.STRING
            },
            imageUrl: {
                type: sequelize_1.DataTypes.STRING
            },
            phone_number: {
                type: sequelize_1.DataTypes.STRING
            }
        }, {
            sequelize: db_config_1.dbConnection,
            timestamps: false,
            tableName: 'customers_tb'
        });
        CustomersTable.sync();
    });
}
exports.setupCustomersTable = setupCustomersTable;
