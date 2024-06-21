import { Partial, Record, String, Number, Null } from 'runtypes';

const requeiredRequest = {
order_id: Number
};

const optionalRequest = {
 
};

export const orderDetailRequest = Record(requeiredRequest).And(Partial(optionalRequest));
