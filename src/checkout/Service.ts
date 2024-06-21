import { Op } from "sequelize";
import { CheckoutTable } from "../common/models/tables/checkout_table";

type payload = {
  Auth: string;
  cart_ids?: string;
  receiver_id?: number;
  courier_id?: number;
  delivery_fee?: string;
  total_amount?: string;
  address_id?: number;
  user?: {
    userId: number
  }
}

export default async function checkoutService(payload: payload) {
  const { cart_ids, receiver_id, courier_id, total_amount, user, address_id } = payload;

  if (!user) {
    throw new Error(`user not founf`)
  }

  const checkout = await CheckoutTable.findOne({
    where: {
      customer_id: user.userId,
      status: "unfinished",
    },
    limit: 1
  })

  if (checkout !== null) {

    await CheckoutTable.update(
      {
        cart_ids: cart_ids,
        receiver_id: receiver_id,
        courier_id: courier_id,
        total_amount: total_amount,
        address_id: address_id
      },
      {
        where: {
          customer_id: user.userId,
          status: "unfinished"
        },
      });

  } else {
    await CheckoutTable.create({
      cart_ids,
      customer_id: user.userId,
      receiver_id,
      courier_id,
      total_amount,
      status: "unfinished"
    })

  }

  return {
    message: "Checkout successful",
  }


}