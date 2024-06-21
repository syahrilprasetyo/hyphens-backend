import { Partial, Record, String, Number } from 'runtypes';

const requeiredRequest = {
  Auth: String,
  checkout_id: Number,
  payment_methode_id: Number,
  total_payment: Number,
};

const optionalRequest = {};

export const orderRequest = Record(requeiredRequest).And(Partial(optionalRequest));
