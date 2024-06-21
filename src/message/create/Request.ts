import { Partial, Record, String, Number, Null } from 'runtypes';

const requeiredRequest = {
  Auth: String,
 
};

const optionalRequest = {
  customerId: Number.Or(Null),
  dokterId: Number.Or(Null),
  sender: String.Or(Null),
  message: String,
  roomChatId: Number.Or(Null)
};

export const createMessagesRequest = Record(requeiredRequest).And(Partial(optionalRequest));
