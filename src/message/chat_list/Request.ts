import { Partial, Record, String, Number, Null } from 'runtypes';

const requeiredRequest = {
  Auth: String,

};

const optionalRequest = {
  customerId: Number.Or(Null),
  dokterId: Number.Or(Null),
};

export const chatListRequest = Record(requeiredRequest).And(Partial(optionalRequest));
