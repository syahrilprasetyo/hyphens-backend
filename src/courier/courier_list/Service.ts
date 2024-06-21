import { Op, QueryTypes } from "sequelize";
import { dbConnection } from "../../config/db_config";
import { CheckoutTable } from "../../common/models/tables/checkout_table";
import { CartTable } from "../../common/models/tables/cart_table";
import { AddressTable } from "../../common/models/tables/address_tables";
import { CourierTable } from "../../common/models/tables/courier_table";


type payload = {
  Auth: string;
  user?: {
    userId: number
  }
}

export default async function courierListService(payload: payload) {


  


  const dataCourier = await CourierTable.findAll({})

  
  return {    
    courierList: dataCourier.map(data => {
      return {
        id: data.id,
        name: data.name,
        time: data.time,
        price: data.price
      }
    })
  }


}