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
exports.setupAllTablesSetup = exports.dbConnection = void 0;
const sequelize_1 = require("sequelize");
const table_setup_config_1 = require("../common/models/tables/table_setup_config");
const mysql = require('mysql');
// Create a connection to the MySQL database
exports.dbConnection = new sequelize_1.Sequelize('hyphensDB' !== null && 'hyphensDB' !== void 0 ? 'hyphensDB' : '', 'root' !== null && 'root' !== void 0 ? 'root' : '', 'thefepi2019', {
    host: 'localhost' !== null && 'localhost' !== void 0 ? 'localhost' : '',
    dialect: 'mysql',
    logging: false
});
function setupAllTablesSetup() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield exports.dbConnection.authenticate();
            console.log('Database Shopable has been establised succesfully.');
        }
        catch (error) {
            console.log('Unable to connect to the database Shopable:', error.message);
        }
        (0, table_setup_config_1.setupCommonTables)();
        (0, table_setup_config_1.wiringCommonTableRelations)();
    });
}
exports.setupAllTablesSetup = setupAllTablesSetup;
