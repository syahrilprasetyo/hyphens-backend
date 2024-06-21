import { Op } from "sequelize";
import { ProductsTable } from "../../common/models/tables/products_table";


type payload = {
  startIndex: number,
  limit: number
  user?: {
    userId: number
  }
}

export default async function productListService(payload: payload) {
  const {startIndex, limit, user} = payload;


  const {rows, count} = await ProductsTable.findAndCountAll({
    where: {
      status: 'active',
    },
    offset: startIndex,
    limit: limit
  })


  return {
    productList: rows,
    total_product: count
  }


}