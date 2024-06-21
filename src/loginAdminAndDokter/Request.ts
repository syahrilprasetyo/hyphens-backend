import { Partial, Record, String } from 'runtypes';

const requeiredRequest = {
  email: String,
  password: String
};

const optionalRequest = {};

export const loginDokterRequest = Record(requeiredRequest).And(Partial(optionalRequest));
