import { Partial, Record, String, Number } from 'runtypes';

const requeiredRequest = {
  Auth: String,
  room_chat_id: Number,
};

const optionalRequest = {};

export const showMessagesRequest = Record(requeiredRequest).And(Partial(optionalRequest));
