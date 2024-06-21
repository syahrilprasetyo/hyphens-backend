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
exports.setupBanksTable = exports.BanksTable = void 0;
const sequelize_1 = require("sequelize");
const db_config_1 = require("../../../config/db_config");
class BanksTable extends sequelize_1.Model {
}
exports.BanksTable = BanksTable;
function setupBanksTable() {
    return __awaiter(this, void 0, void 0, function* () {
        BanksTable.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                unique: true
            },
            bank_name: {
                type: sequelize_1.DataTypes.STRING
            },
            no_rek: {
                type: sequelize_1.DataTypes.STRING
            },
            payment_fee: {
                type: sequelize_1.DataTypes.INTEGER
            }
        }, {
            sequelize: db_config_1.dbConnection,
            timestamps: false,
            tableName: 'banks_tb'
        });
        BanksTable.sync();
    });
}
exports.setupBanksTable = setupBanksTable;
