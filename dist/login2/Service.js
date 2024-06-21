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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const customer_table_1 = require("../common/models/tables/customer_table");
function RegistrationService(payload) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email, password } = payload;
        const data = {
            customerId: 0,
            email: email,
            message: "login successful",
            token: ''
        };
        // Find the user by email
        const user = yield customer_table_1.CustomersTable.findOne({ where: { email } });
        // If user does not exist, return null
        if (!user) {
            throw new Error(`User not found`);
        }
        data.customerId = user.id;
        // Verify password
        const passwordMatch = yield bcrypt_1.default.compare(password, user.password);
        // If password doesn't match, return null
        if (!passwordMatch) {
            throw new Error(`password doesn't match`);
        }
        // Generate JWT token
        const token = jsonwebtoken_1.default.sign({ userId: user.id }, 'indomiegoreng2', { expiresIn: '1h' });
        // Return the JWT token
        data.token = token !== null && token !== void 0 ? token : '';
        return data;
    });
}
exports.default = RegistrationService;
