import { Partial, Record, String } from 'runtypes';

const requeiredRequest = {
  name: String,
  username: String,
  email: String,
  password: String,
  type: String,
};

const optionalRequest = {};

export const registrationRequest = Record(requeiredRequest).And(Partial(optionalRequest));
