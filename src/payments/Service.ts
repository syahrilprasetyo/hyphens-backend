import { BanksTable } from "../common/models/tables/bank_tables";
import { OrdersTable } from "../common/models/tables/orders_table"



type payload = {
  Auth: string,
  user?: {
    userId: number
  }
}

export default async function paymentsService(payload: payload) {
  const {   user } = payload;


  if (!user) {
    throw new Error(`Customer not found`)
  }

 const dataBanks = await BanksTable.findAll()

  return {
    listOfbanks: dataBanks.map(data => {
      return {
        id: data.id,
        bankName: data.bank_name,
        payment_fee: data.payment_fee
      }
    })
  }



}