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
const messages_table_1 = require("../../common/models/tables/messages_table");
const db_config_1 = require("../../config/db_config");
const sequelize_1 = require("sequelize");
function showMessagesService(payload) {
    return __awaiter(this, void 0, void 0, function* () {
        const data_messages = yield messages_table_1.MessagesTable.findAll({
            where: {
                room_chat_id: payload.room_chat_id
            }
        });
        const queryRoomChat = `
    SELECT
      room_chat_tb.id AS room_chat_id,
      room_chat_tb.dokter_id,
      room_chat_tb.customer_id,
      room_chat_tb.createdAt AS room_chat_createdAt,
      room_chat_tb.updatedAt AS room_chat_updatedAt,
      (SELECT name FROM customers_tb WHERE id = room_chat_tb.customer_id) AS customer_name,
      (SELECT email FROM customers_tb WHERE id = room_chat_tb.customer_id) AS email_customer,
      (SELECT name FROM dokter_tb WHERE id = room_chat_tb.dokter_id) AS dokter_name,
      (SELECT email FROM dokter_tb WHERE id = room_chat_tb.dokter_id) AS email_dokter
    FROM
      room_chat_tb
    WHERE
      room_chat_tb.id = ${payload.room_chat_id}
    `;
        const roomchat = yield db_config_1.dbConnection.query(queryRoomChat, {
            type: sequelize_1.QueryTypes.SELECT,
        });
        const query = `
    SELECT
      room_chat_tb.id AS room_chat_id,
      room_chat_tb.dokter_id,
      room_chat_tb.customer_id,
      room_chat_tb.createdAt AS room_chat_createdAt,
      room_chat_tb.updatedAt AS room_chat_updatedAt,
      messages_tb.id AS message_id,
      messages_tb.message,
      messages_tb.createdAt AS message_createdAt,
      messages_tb.updatedAt AS message_updatedAt,
      (SELECT name FROM customers_tb WHERE id = messages_tb.customer_id) AS customer_name,
      (SELECT email FROM customers_tb WHERE id = messages_tb.customer_id) AS email_customer,
      (SELECT name FROM dokter_tb WHERE id = messages_tb.dokter_id) AS dokter_name,
      (SELECT email FROM dokter_tb WHERE id = messages_tb.dokter_id) AS email_dokter
    FROM
      room_chat_tb
    LEFT JOIN
      messages_tb ON room_chat_tb.id = messages_tb.room_chat_id
    WHERE
      room_chat_tb.id = ${payload.room_chat_id}
    `;
        const results = yield db_config_1.dbConnection.query(query, {
            type: sequelize_1.QueryTypes.SELECT,
        });
        if (data_messages.length === 0) {
            return {};
        }
        const messages = results.map(message => {
            const timestamp = message.message_createdAt;
            const date = new Date(timestamp);
            const hour = date.getUTCHours().toString().padStart(2, '0');
            const minute = date.getUTCMinutes().toString().padStart(2, '0');
            const hourMinute = `${hour}:${minute}`;
            // Output: 17:31
            return {
                id: message.message_id,
                sander_name: message.customer_name ? message.customer_name : message.dokter_name,
                customer_id: message.customer_id,
                dokter_id: message.dokter_id,
                message: message.message,
                date: hourMinute,
                email_customer: message.email_customer,
                email_dokter: message.email_dokter
            };
        });
        const data = {
            identifier: {
                room_chat_id: messages[0].dokter_id,
                customer_id: messages[0].customer_id,
                dokter_id: messages[0].dokter_id,
                email_dokter: roomchat.map(email => email.email_dokter)[0],
                email_customer: roomchat.map(email => email.email_customer)[0],
            },
            messages: messages
        };
        return data;
    });
}
exports.default = showMessagesService;
