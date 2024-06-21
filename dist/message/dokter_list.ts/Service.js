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
const dokter_tables_1 = require("../../common/models/tables/dokter_tables");
function dokterListService(payload) {
    return __awaiter(this, void 0, void 0, function* () {
        // check apakah user sudah epernah chat 
        //  const dokterId = await RoomChatTable.findAll({
        //     where: {
        //       customer_id: payload.customerId
        //    },
        //    raw:true
        //  })
        // ambil data dokter exclude yg sudah di chat  
        const dokterList = yield dokter_tables_1.DokterTable.findAll({});
        return dokterList;
    });
}
exports.default = dokterListService;
