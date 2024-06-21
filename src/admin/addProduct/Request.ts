import { Partial, Record, String, Number, Null } from 'runtypes';

const requeiredRequest = {
  productName: String,
  description: String,
  discount: String,
  finalPrice: Number,
  stock: Number,
  isActive: String,
  image: String,
};

const optionalRequest = {
 
};

export const addProductRequest = Record(requeiredRequest).And(Partial(optionalRequest));
