import { AddressTable } from "../../common/models/tables/address_tables";




type payload = {
  Auth: string,
  fullName: string,
  email: string,
  address: string,
  city: string,
  country: string,
  zipCode: string,
  no_telp: string,
  user?: {
    userId: number
  }
}

export default async function orderService(payload: payload) {
  const { user, email, address, fullName, city, country, zipCode, no_telp } = payload;

  if (!user) {
    throw new Error(`Customer not found`)
  }

  const data = {
    "full_name": fullName,
    "email": email,
    "address": address,
    "city": city,
    "country": country,
    "zipCode": zipCode,
    "customer_id": user.userId,
    "no_telp": no_telp
  }

  await AddressTable.create(data)

  return {
    message: `successfully created`
  }



}