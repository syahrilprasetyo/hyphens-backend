import { BanksTable } from "../../common/models/tables/bank_tables"
import { OrdersTable } from "../../common/models/tables/orders_table"




type payload = {
  Auth: string,
  order_id: number,
  user?: {
    userId: number
  }
}

export default async function orderReceiptService(payload: payload) {

  const { user, order_id } = payload
  
  if (!user) { 
    throw new Error("User not found")
  }

   const data = await OrdersTable.findOne({
    where: {
       customer_id: user.userId,
       id: order_id
    }
   })
  
  const bank = await BanksTable.findOne({
    where: {
        id: data?.payment_methode_id
      }
  })

  return {
    total_amount: data?.total_payment,
    exp_date: data?.exp_date,
    bank_name: bank?.bank_name,
    no_rek: bank?.no_rek


  }



}