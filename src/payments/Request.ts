import { Partial, Record, String, Number } from 'runtypes';

const requeiredRequest = {
  Auth: String,
};

const optionalRequest = {};

export const paymentsRequest = Record(requeiredRequest).And(Partial(optionalRequest));
