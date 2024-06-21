import { Op, QueryTypes } from "sequelize";
import { dbConnection } from "../../config/db_config";
import { CheckoutTable } from "../../common/models/tables/checkout_table";
import { CartTable } from "../../common/models/tables/cart_table";
import { ProductsTable } from "../../common/models/tables/products_table";




export default async function productListService() {
  
  const products = await ProductsTable.findAll()


  const query = `
     SELECT
     *,
      (
        SELECT
          products_image_tb.url
        FROM
          products_image_tb
        WHERE
          products_image_tb.product_id = products_tb.id
        LIMIT 1
      ) AS imageUrl
       
    FROM
      products_tb
  `;

  const results: { id: number, product_name: string, regular_price: string, discount: string, final_price: string, imageUrl: string}[] = await dbConnection.query(query, {
    type: QueryTypes.SELECT,
  });

  console.log(results)



  const data = {
    products: results.map(data => {
      return {
        id: String(data.id),
        name: data.product_name,
        regularPrice: data.regular_price,
        discount: data.discount ?? 0,
        finalPrice: data.final_price,
        image: data.imageUrl
      }
    })
  }

  return data
}