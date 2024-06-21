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

export default async function checkoutDetailService(payload: payload) {
  const { user, } = payload;

  if (!user) {
    throw new Error(`user not founf`)
  }

  const dataCheckout = await CheckoutTable.findOne({
    where: {
      customer_id: user.userId,
      status: "unfinished"
    },
    limit: 1
  })

  if (dataCheckout === null) {
    throw new Error(`checkout not found`)
  }

  const deliveryFee = await CourierTable.findOne(
    {
      where: {
        id: dataCheckout.courier_id ?? 0
      }
    }
  )


  const productIdsFilter: {
    product_id: number,
    product_name: string,
    regular_price: string,
    discount: string,
    final_price: string,
    qty: number,
  }[] = await dbConnection.query(`
      SELECT c.id as id, c.customer_id as customer_id,
        c.qty as qty,
        c.id AS id, 
        c.customer_id AS customer_id,
        c.product_id AS product_id,
        p.product_name AS product_name,
        p.regular_price AS regular_price,
        p.discount AS discount,
        p.final_price AS final_price,
        (SELECT url FROM products_image_tb WHERE product_id = p.id LIMIT 1) AS image
      FROM cart_tb as c
      INNER JOIN products_tb as p
      ON product_id = p.id 
      WHERE c.customer_id = ${user?.userId}
    `, { type: QueryTypes.SELECT });


  const addressData = await AddressTable.findOne({
    where: {
      id: dataCheckout.address_id
    }
  })



  let address
  address = {
    email: addressData?.email,
    noTelp: addressData?.no_telp,
    address: addressData?.address
  }

  if (addressData === null) {
    address = null
  }

  return {
    checkoutId: dataCheckout.id,
    products: productIdsFilter,
    courier: '',
    address,
    deliveryFee: deliveryFee?.price,
    total_amount: parseInt(dataCheckout.total_amount ?? ''),
  }


}