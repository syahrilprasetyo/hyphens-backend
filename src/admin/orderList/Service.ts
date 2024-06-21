import { Op } from "sequelize";
import { ProductsTable } from "../../common/models/tables/products_table";
import { ProductImagesTable } from "../../common/models/tables/product_images_tables";
import multer from 'multer';
import { OrdersTable } from "../../common/models/tables/orders_table";
import { CustomersTable } from "../../common/models/tables/customer_table";
import { BanksTable } from "../../common/models/tables/bank_tables";

type Payload = {

  user?: {
    userId: number;
  };
};


export default async function orderListService(payload: Payload) {

  console.log("test")

  const {rows, count} = await OrdersTable.findAndCountAll({
    attributes: ['id', 'total_payment', 'order_status', 'createdAt'],
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
    order: [['createdAt', 'desc']]
  });

  return {
    orderList: rows,
    total_orders: count
  };

}
