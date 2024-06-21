import { Partial, Record, String, Number, Array } from 'runtypes';

const requeiredRequest = {
 
};

const optionalRequest = {
};

export const productListRequest = Record(requeiredRequest).And(Partial(optionalRequest));
