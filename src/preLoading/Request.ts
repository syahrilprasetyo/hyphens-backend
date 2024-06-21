import { Partial, Record, String, Number } from 'runtypes';

const requeiredRequest = {
  Auth: String
};

const optionalRequest = {};

export const preLoadingRequest = Record(requeiredRequest).And(Partial(optionalRequest));
