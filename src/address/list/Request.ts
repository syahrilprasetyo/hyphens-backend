import { Partial, Record, String, Number } from 'runtypes';

const requeiredRequest = {
  Auth: String,
};

const optionalRequest = {};

export const AddressListRequest = Record(requeiredRequest).And(Partial(optionalRequest));
