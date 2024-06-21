import { Partial, Record, String, Number } from 'runtypes';

const requeiredRequest = {
  Auth: String,
  order_id: Number
};

const optionalRequest = {};

export const orderReceiptRequest = Record(requeiredRequest).And(Partial(optionalRequest));
