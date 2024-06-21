import { Partial, Record, String, Number } from 'runtypes';

const requeiredRequest = {
  Auth: String,
  product_id: Number,
  qty: Number,
};

const optionalRequest = {};

export const addToCartRequest = Record(requeiredRequest).And(Partial(optionalRequest));
