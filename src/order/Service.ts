import { CartTable } from "../common/models/tables/cart_table";
import { CheckoutTable } from "../common/models/tables/checkout_table";
import { OrdersTable } from "../common/models/tables/orders_table"



type payload = {
  Auth: string,
  checkout_id: number,
  payment_methode_id: number,
  total_payment: number,
  user?: {
    userId: number
  }
}

export default async function orderService(payload: payload) {
  const { checkout_id, payment_methode_id, user, total_payment } = payload;

  if (!user) {
    throw new Error(`Customer not found`)
  }

  // Get the current date
  const currentDate = new Date();

  // Add one day to the current date
  const nextDay = new Date(currentDate);
  nextDay.setDate(currentDate.getDate() + 1);

  // Add the item to the cart
  const order = await OrdersTable.create({
    checkout_id,
    payment_methode_id,
    order_status: "wating_for_payment",
    total_payment,
    customer_id: user.userId,
    exp_date: nextDay
  });

  await CartTable.update({status: "finished"},{
    where: {
      customer_id: user.userId
    }
  })

  await CheckoutTable.update({status: "finished"},{
    where: {
      customer_id: user.userId
    }
  })

  return {
    order_id: order.id
  }



}