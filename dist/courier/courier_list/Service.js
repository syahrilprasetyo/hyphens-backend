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
const courier_table_1 = require("../../common/models/tables/courier_table");
function courierListService(payload) {
    return __awaiter(this, void 0, void 0, function* () {
        const dataCourier = yield courier_table_1.CourierTable.findAll({});
        return {
            courierList: dataCourier.map(data => {
                return {
                    id: data.id,
                    name: data.name,
                    time: data.time,
                    price: data.price
                };
            })
        };
    });
}
exports.default = courierListService;
