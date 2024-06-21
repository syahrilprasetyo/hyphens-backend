import { Partial, Record, String, Number, Null } from 'runtypes';

const requeiredRequest = {
  Auth: String  
};

const optionalRequest = {
  cart_ids: String,
  receiver_id: Number,
  courier_id: Number,
  delivery_fee: String,
  total_amount: String,
  address_id: Number,
};

export const checkoutRequest = Record(requeiredRequest).And(Partial(optionalRequest));
