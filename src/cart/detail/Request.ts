import { Partial, Record, String, Number } from 'runtypes';

const requeiredRequest = {
  Auth: String
};

const optionalRequest = {};

export const cartDetailRequest = Record(requeiredRequest).And(Partial(optionalRequest));
