"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const messages_table_1 = require("../../common/models/tables/messages_table");
const room_chat_table_1 = require("../../common/models/tables/room_chat_table");
function createMessagesService(payload) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        if (payload.room_chat_id) {
            yield messages_table_1.MessagesTable.create({
                room_chat_id: payload.room_chat_id,
                customer_id: payload.sender == "customer" ? payload.customerId : null,
                dokter_id: payload.sender == "dokter" ? payload.dokterId : null,
                message: payload.message,
                is_seen: false
            });
            return {
                message: "pesan terkirim"
            };
        }
        else {
            const data = yield room_chat_table_1.RoomChatTable.create({
                customer_id: (_a = payload.customerId) !== null && _a !== void 0 ? _a : 0,
                dokter_id: (_b = payload.dokterId) !== null && _b !== void 0 ? _b : 0,
                is_active: true
            });
            return {
                message: "room chat has been created",
                room_chat_id: data.id
            };
        }
    });
}
exports.default = createMessagesService;
