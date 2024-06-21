import { Partial, Record, String, Number } from 'runtypes';

const requeiredRequest = {
  Auth: String,
  fullName: String,
  email: String,
  address: String,
  city: String,
  country: String,
  zipCode: String,
  no_telp: String
};



const optionalRequest = {};

export const AddAddressRequest = Record(requeiredRequest).And(Partial(optionalRequest));
