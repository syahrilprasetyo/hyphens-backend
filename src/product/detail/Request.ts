import { Partial, Record, String, Number, Array } from 'runtypes';

const requeiredRequest = {
productId: String
};

const optionalRequest = {
};

export const productDetailRequest = Record(requeiredRequest).And(Partial(optionalRequest));
