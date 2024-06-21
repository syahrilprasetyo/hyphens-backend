import { Partial, Record, String, Number, Array } from 'runtypes';

const requeiredRequest = {
  Auth: String
  
};

const optionalRequest = {
};

export const courierListRequest = Record(requeiredRequest).And(Partial(optionalRequest));
