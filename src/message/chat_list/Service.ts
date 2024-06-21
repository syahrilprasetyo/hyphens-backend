import { Op, QueryTypes } from "sequelize"
import { DokterTable } from "../../common/models/tables/dokter_tables"
import { RoomChatTable } from "../../common/models/tables/room_chat_table"
import { CustomersTable } from "../../common/models/tables/customer_table"
import { MessagesTable } from "../../common/models/tables/messages_table"
import { dbConnection } from "../../config/db_config"

type payload = {
  Auth: string
  customerId?: number | null | undefined
  dokterId?: number | null | undefined
  user?: {
    userId: number
  }
}

export default async function chatListService(payload: payload) {

  let chatList = []

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

    const results = await dbConnection.query(query, {
      type: QueryTypes.SELECT,
    });


    chatList = results
  } else {

   
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

    const results = await dbConnection.query(query, {
      type: QueryTypes.SELECT,
    });


    chatList = results
  }

  return {
    chatList: chatList
  }


}