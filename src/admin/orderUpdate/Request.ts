import { Partial, Record, String, Number, Null } from 'runtypes';

const requeiredRequest = {
  order_id: Number,
  status: String
};

const optionalRequest = {
 
};

export const orderUpdateRequest = Record(requeiredRequest).And(Partial(optionalRequest));
