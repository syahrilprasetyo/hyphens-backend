import { OrdersTable } from "../../common/models/tables/orders_table";
import { CustomersTable } from "../../common/models/tables/customer_table";
import { BanksTable } from "../../common/models/tables/bank_tables";
import { CheckoutTable } from "../../common/models/tables/checkout_table";
import { CartTable } from "../../common/models/tables/cart_table";
import { Op, Sequelize } from "sequelize";
import { ProductImagesTable } from "../../common/models/tables/product_images_tables";
import { AddressTable } from "../../common/models/tables/address_tables";

type Payload = {
  order_id: number,
  status: string,
  user?: {
    userId: number;
  };
};


export default async function orderUpdateService(payload: Payload) {

  const order = await OrdersTable.findOne({
    where: {
      id: payload.order_id
    }
  })

  if (!order) {
    throw new Error("Order not found")
  }

  await OrdersTable.update({ order_status: payload.status }, {
    where: {
      id: order.id

    }
  })

  return {
    message: "Order updated"
  };

}
