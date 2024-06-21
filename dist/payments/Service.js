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
const bank_tables_1 = require("../common/models/tables/bank_tables");
function paymentsService(payload) {
    return __awaiter(this, void 0, void 0, function* () {
        const { user } = payload;
        if (!user) {
            throw new Error(`Customer not found`);
        }
        const dataBanks = yield bank_tables_1.BanksTable.findAll();
        return {
            listOfbanks: dataBanks.map(data => {
                return {
                    id: data.id,
                    bankName: data.bank_name,
                    payment_fee: data.payment_fee
                };
            })
        };
    });
}
exports.default = paymentsService;
