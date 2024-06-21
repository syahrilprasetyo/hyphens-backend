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
const sequelize_1 = require("sequelize");
const db_config_1 = require("../../config/db_config");
function chatListService(payload) {
    return __awaiter(this, void 0, void 0, function* () {
        let chatList = [];
        if (payload.customerId) {
            const query = `
     SELECT
      room_chat_tb.id AS room_chat_id,
      room_chat_tb.dokter_id,
      room_chat_tb.customer_id,
      room_chat_tb.createdAt AS room_chat_createdAt,
      room_chat_tb.updatedAt AS room_chat_updatedAt,
      (
        SELECT
          messages_tb.message
        FROM
          messages_tb
        WHERE
          messages_tb.room_chat_id = room_chat_tb.id
        LIMIT 1
      ) AS message,
       (
        SELECT
          customers_tb.email
        FROM
          customers_tb
        WHERE
          customers_tb.id = room_chat_tb.customer_id
        LIMIT 1
      ) AS customer_email,

      (
        SELECT
          dokter_tb.email
        FROM
          dokter_tb
        WHERE
          dokter_tb.id = room_chat_tb.dokter_id
        LIMIT 1
      ) AS dokter_email,
      
      (
        SELECT
          messages_tb.createdAt
        FROM
          messages_tb
        WHERE
          messages_tb.room_chat_id = room_chat_tb.id
        LIMIT 1
      ) AS message_createdAt,
      (
        SELECT
          messages_tb.updatedAt
        FROM
          messages_tb
        WHERE
          messages_tb.room_chat_id = room_chat_tb.id
        LIMIT 1
      ) AS message_updatedAt,
      dokter_tb.name AS dokter_name
    FROM
      room_chat_tb
    LEFT JOIN
      dokter_tb ON room_chat_tb.dokter_id = dokter_tb.id
    WHERE
      room_chat_tb.customer_id = ${payload.customerId}
     ORDER BY room_chat_tb.createdAt DESC
  `;
            const results = yield db_config_1.dbConnection.query(query, {
                type: sequelize_1.QueryTypes.SELECT,
            });
            chatList = results;
        }
        else {
            const query = `
     SELECT
      room_chat_tb.id AS room_chat_id,
      room_chat_tb.dokter_id,
      room_chat_tb.customer_id,
      room_chat_tb.createdAt AS room_chat_createdAt,
      room_chat_tb.updatedAt AS room_chat_updatedAt,
      (
        SELECT
          customers_tb.name
        FROM
          customers_tb
        WHERE
          customers_tb.id = room_chat_tb.customer_id
        LIMIT 1
      ) AS customer_name,
       (
        SELECT
          customers_tb.email
        FROM
          customers_tb
        WHERE
          customers_tb.id = room_chat_tb.customer_id
        LIMIT 1
      ) AS customer_email,
      (
        SELECT
          messages_tb.message
        FROM
          messages_tb
        WHERE
          messages_tb.room_chat_id = room_chat_tb.id
        LIMIT 1
      ) AS message,
      (
        SELECT
          messages_tb.createdAt
        FROM
          messages_tb
        WHERE
          messages_tb.room_chat_id = room_chat_tb.id
        LIMIT 1
        ) AS message_createdAt,
      (
        SELECT
          messages_tb.updatedAt
        FROM
          messages_tb
        WHERE
          messages_tb.room_chat_id = room_chat_tb.id
        LIMIT 1
      ) AS message_updatedAt,
      dokter_tb.name AS dokter_name
    FROM
      room_chat_tb
    LEFT JOIN
      dokter_tb ON room_chat_tb.dokter_id = dokter_tb.id
    WHERE
      room_chat_tb.dokter_id = ${payload.dokterId}
    ORDER BY room_chat_tb.createdAt DESC
  `;
            const results = yield db_config_1.dbConnection.query(query, {
                type: sequelize_1.QueryTypes.SELECT,
            });
            chatList = results;
        }
        return {
            chatList: chatList
        };
    });
}
exports.default = chatListService;
