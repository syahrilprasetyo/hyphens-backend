import sequelize, { Op, QueryTypes } from 'sequelize';
import { CartTable } from '../../common/models/tables/cart_table';
import { dbConnection } from '../../config/db_config';
import { ProductsTable } from '../../common/models/tables/products_table';




type payload = {
  Auth: string,
  user?: {
    userId: number
  }
}

export default async function cartDetailService(payload: payload) {
  const { user } = payload;



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
      AND c.status = "active"
    `, { type: QueryTypes.SELECT });
  
  

  return {
    products: productIdsFilter,
    customerId: user?.userId
  }



}