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
exports.setupAddressTable = exports.AddressTable = void 0;
const sequelize_1 = require("sequelize");
const db_config_1 = require("../../../config/db_config");
class AddressTable extends sequelize_1.Model {
}
exports.AddressTable = AddressTable;
function setupAddressTable() {
    return __awaiter(this, void 0, void 0, function* () {
        AddressTable.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                unique: true
            },
            customer_id: {
                type: sequelize_1.DataTypes.INTEGER
            },
            email: {
                type: sequelize_1.DataTypes.STRING
            },
            no_telp: {
                type: sequelize_1.DataTypes.STRING
            },
            address: {
                type: sequelize_1.DataTypes.STRING
            },
            full_name: {
                type: sequelize_1.DataTypes.STRING
            },
            city: {
                type: sequelize_1.DataTypes.STRING
            },
            country: {
                type: sequelize_1.DataTypes.STRING
            },
            zipCode: {
                type: sequelize_1.DataTypes.STRING
            }
        }, {
            sequelize: db_config_1.dbConnection,
            timestamps: false,
            tableName: 'address_tb',
        });
        AddressTable.sync();
    });
}
exports.setupAddressTable = setupAddressTable;
