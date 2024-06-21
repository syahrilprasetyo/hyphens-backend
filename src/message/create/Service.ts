import { MessagesTable } from "../../common/models/tables/messages_table"
import { RoomChatTable } from "../../common/models/tables/room_chat_table"

type payload = {
  Auth: string
  customerId?: number | null | undefined;
  dokterId?: number | null | undefined;
  sender?: string | null | undefined;
  message?: string | undefined;
  room_chat_id?: number | null | undefined;
  user?: {
    userId: number
  }
}

export default async function createMessagesService(payload: payload) {


  if (payload.room_chat_id) {
    await MessagesTable.create({
      room_chat_id: payload.room_chat_id,
      customer_id: payload.sender == "customer" ? payload.customerId : null,
      dokter_id: payload.sender == "dokter" ? payload.dokterId : null,
      message: payload.message,
      is_seen: false
    })

    return {
      message: "pesan terkirim"
    }
  } else {

    const data = await RoomChatTable.create({
      customer_id: payload.customerId ?? 0,
      dokter_id: payload.dokterId ?? 0,
      is_active: true
    })


    return {
      message: "room chat has been created",
      room_chat_id: data.id
    }
  }





}