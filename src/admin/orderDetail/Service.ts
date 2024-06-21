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
  user?: {
    userId: number;
  };
};


export default async function orderDetailService(payload: Payload) {

  const order = await OrdersTable.findOne({
    where: {
      id: payload.order_id
    },
    attributes: ['id', 'total_payment', 'order_status', 'createdAt', 'checkout_id'],
    include: [
      {
        model: CustomersTable,
        as: 'customer',
        attributes: ['name', 'email', 'phone_number'],
      },
      {
        model: BanksTable,
        as: 'bank',
        attributes: ['bank_name'],
      },
    ],
  });

  if (!order) {
    throw new Error("Checkout not found")
  }



  const checkout = await CheckoutTable.findOne({
    where: {
      id: order.checkout_id
    }
  })

  if (!checkout) {
    throw new Error("Checkout not found")
  }

  const str = checkout.cart_ids;
  const cart_ids = str.split(',').map(Number);


  const cart = await CartTable.findAll({
    where: {
      id: {
        [Op.in]: cart_ids
      }
    },
    attributes: {
      include: [
        [
          Sequelize.literal(`(
            SELECT product_name
            FROM hyphensDB.products_tb AS pf
            WHERE pf.id = product_id
            LIMIT 1
          )`),
          'product_name'
        ],
        [
          Sequelize.literal(`(
            SELECT regular_price
            FROM hyphensDB.products_tb AS pf
            WHERE pf.id = product_id
            LIMIT 1
          )`),
          'reguler_price'
        ],
        [
          Sequelize.literal(`(
            SELECT final_price
            FROM hyphensDB.products_tb AS pf
            WHERE pf.id = product_id
            LIMIT 1
          )`),
          'final_price'
        ],
        [
          Sequelize.literal(`(
            SELECT discount
            FROM hyphensDB.products_tb AS pf
            WHERE pf.id = product_id
            LIMIT 1
          )`),
          'discount'
        ],
        [
          Sequelize.literal(`(
            SELECT url
            FROM hyphensDB.products_image_tb AS pf
            WHERE pf.id = product_id
            LIMIT 1
          )`),
          'url'
        ],
      ]
    },
    raw: true,
    nest: true
  })

  const final_data = cart.map(async (data) => {
    return {
      product_id: data.product_id,
      product_name: data.product_name,
      regular_price: data.regular_price,
      final_price: data.final_price,
      discount: data.discount ?? 0,
      image_url: data.url
    }
  })


  const address = await AddressTable.findOne({
    where: {
      id: checkout.address_id
    }
  })

  return {
    order_detail: {
      order_id: order.id,
      total_payment: order.total_payment,
      order_status: order.order_status
    },
    product_details: await Promise.all(final_data),
    address: address

  };

}
