import { Partial, Record, String, Number, Null } from 'runtypes';

const requeiredRequest = {

};

const optionalRequest = {
 
};

export const orderListRequest = Record(requeiredRequest).And(Partial(optionalRequest));
