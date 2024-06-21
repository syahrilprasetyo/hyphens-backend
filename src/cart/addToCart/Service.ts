import { CartTable } from '../../common/models/tables/cart_table';


type payload = {
  Auth: string,

  product_id: number,
  qty: number,
  user?: {
    userId: number
  }
}

export default async function addToCartService(payload: payload) {
  const {  product_id, user, qty } = payload;


  if (!user) {
    throw new Error(`Customer not found`)
  }
  // Check if the product exists (you may need to fetch the product from your database)

  // Add the item to the cart
  const cartItem = await CartTable.create({
    customer_id: user?.userId,
    product_id,
    qty,
    status: 'active'
  });

  return {
    message: `product berhasil di tambahkan`
  }



}