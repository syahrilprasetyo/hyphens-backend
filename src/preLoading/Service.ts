import { CustomersTable } from "../common/models/tables/customer_table"





type payload = {
  Auth: string
  user?: {
    userId: number
  }
}

export default async function preLoadingService(payload: payload) {

  const {user} = payload

  const dataCustomer = await CustomersTable.findOne({
    where: {
      id: user?.userId
    }
  })

  return {
    name: dataCustomer?.name,
    image: dataCustomer?.imageUrl
  }



}