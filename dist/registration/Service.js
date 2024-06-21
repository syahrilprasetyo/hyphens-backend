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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const customer_table_1 = require("../common/models/tables/customer_table");
const dokter_tables_1 = require("../common/models/tables/dokter_tables");
function RegistrationService(payload) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name, username, email, password, type } = payload;
        if (type === "dokter") {
            const users = yield dokter_tables_1.DokterTable.findOne({
                where: {
                    email: email,
                    username: username
                }
            });
            if (users) {
                throw new Error(`email or username already exists`);
            }
            const hashedPassword = yield bcrypt_1.default.hash(password, 10);
            yield dokter_tables_1.DokterTable.create({ name, username, email, password: hashedPassword });
        }
        if (type === "customer") {
            const users = yield customer_table_1.CustomersTable.findOne({
                where: {
                    email: email,
                    username: username
                }
            });
            if (users) {
                throw new Error(`email or username already exists`);
            }
            const hashedPassword = yield bcrypt_1.default.hash(password, 10);
            yield customer_table_1.CustomersTable.create({ name, username, email, password: hashedPassword });
        }
        // if (type === "adnimin") {
        //   const users = await CustomersTable.findOne({
        //     where: {
        //       email: email,
        //       username: username
        //     }
        //   });
        //   if (users) {
        //     throw new Error(`email or username already exists`)
        //   }
        //  }
        return "Registration submitted successfully";
    });
}
exports.default = RegistrationService;
