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
exports.setupMessagesTable = exports.MessagesTable = void 0;
const sequelize_1 = require("sequelize");
const db_config_1 = require("../../../config/db_config");
class MessagesTable extends sequelize_1.Model {
}
exports.MessagesTable = MessagesTable;
function setupMessagesTable() {
    return __awaiter(this, void 0, void 0, function* () {
        MessagesTable.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                unique: true
            },
            room_chat_id: {
                type: sequelize_1.DataTypes.INTEGER,
            },
            customer_id: {
                type: sequelize_1.DataTypes.INTEGER,
            },
            dokter_id: {
                type: sequelize_1.DataTypes.INTEGER,
            },
            message: {
                type: sequelize_1.DataTypes.STRING,
            },
            is_seen: {
                type: sequelize_1.DataTypes.BOOLEAN
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
            tableName: 'messages_tb'
        });
        MessagesTable.sync();
    });
}
exports.setupMessagesTable = setupMessagesTable;
