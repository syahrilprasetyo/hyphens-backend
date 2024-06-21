import { Partial, Record, String, Number, Null } from 'runtypes';

const requeiredRequest = {
  Auth: String,
  customerId: Number
};

const optionalRequest = {


};

export const dokterListRequest = Record(requeiredRequest).And(Partial(optionalRequest));
