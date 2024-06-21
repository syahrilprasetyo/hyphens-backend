import { AddressTable } from "../../common/models/tables/address_tables";

type payload = {
  Auth: string,
  user?: {
    userId: number
  }
}

export default async function orderService(payload: payload) {
  const { user } = payload;

  const addressData = await AddressTable.findAll({
    where: {
      customer_id: user?.userId
    },
    raw: true
  })

  let data: any[] = []

  if (addressData) {
    data = addressData.map((address) => {
      return {
        id: address.id,
        fullName: address.full_name,
        noTelp: address.no_telp,
        email: address.email,
        address: address.address,
        city: address.city,
        country: address.country,
        zipCode: address.zipCode
      }
    })
  }

  return {
    address: data
  }

}