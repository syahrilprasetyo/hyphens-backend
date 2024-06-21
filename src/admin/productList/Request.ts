import { Partial, Record, String, Number, Null } from 'runtypes';

const requeiredRequest = {
  startIndex: Number,
  limit: Number
};

const optionalRequest = {
 
};

export const productListRequest = Record(requeiredRequest).And(Partial(optionalRequest));
