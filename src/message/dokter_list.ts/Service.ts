import { Op, QueryTypes, where } from "sequelize"
import { DokterTable } from "../../common/models/tables/dokter_tables"
import { RoomChatTable } from "../../common/models/tables/room_chat_table"
import { CustomersTable } from "../../common/models/tables/customer_table"
import { MessagesTable } from "../../common/models/tables/messages_table"
import { dbConnection } from "../../config/db_config"

type payload = {
  Auth: string
  customerId: number 
  user?: {
    userId: number
  }
}

export default async function dokterListService(payload: payload) {


  // check apakah user sudah epernah chat 
//  const dokterId = await RoomChatTable.findAll({
//     where: {
//       customer_id: payload.customerId
//    },
//    raw:true
//  })


  // ambil data dokter exclude yg sudah di chat  
  const dokterList = await DokterTable.findAll({
   
  })

  
  return dokterList


}