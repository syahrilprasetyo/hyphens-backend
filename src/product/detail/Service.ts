import { Op, QueryTypes } from "sequelize";
import { dbConnection } from "../../config/db_config";
import { CheckoutTable } from "../../common/models/tables/checkout_table";
import { CartTable } from "../../common/models/tables/cart_table";
import { ProductsTable } from "../../common/models/tables/products_table";
import { ProductImagesTable } from "../../common/models/tables/product_images_tables";

type payload = {
  productId: string
}


export default async function productDetailService(payload: payload) {
  const { productId } = payload
  
  if (productId === "") {
    throw new Error("Product Id not found")
  }
  
  const product = await ProductsTable.findOne({
    where: {
      id: productId
    }
  })

  if (product == null) {
    throw new Error("Product not found")
  }

  const images = await ProductImagesTable.findAll({
    where: {
      product_id: productId
    },
    raw: true
  })



  
  const data = {
    product: {
      name: product.product_name,
      regularPrice: product.regular_price,
      discount: product.discount ?? 0,
      finalPrice: product.final_price,
      images: images,
      desc: product.desc
    }
  }

  return data
}