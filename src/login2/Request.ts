import { Partial, Record, String } from 'runtypes';

const requeiredRequest = {
  email: String,
  password: String
};

const optionalRequest = {};

export const loginRequest = Record(requeiredRequest).And(Partial(optionalRequest));
