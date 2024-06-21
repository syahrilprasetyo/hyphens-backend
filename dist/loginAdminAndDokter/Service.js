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
const dokter_tables_1 = require("../common/models/tables/dokter_tables");
const admin_table_1 = require("../common/models/tables/admin_table");
function RegistrationService(payload) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email, password } = payload;
        const data = {
            dokterId: 0,
            adminId: 0,
            email: email,
            message: "login successful",
            token: '',
            role: ''
        };
        // Find the user by email
        const dokter = yield dokter_tables_1.DokterTable.findOne({ where: { email } });
        const admin = yield admin_table_1.AdminTable.findOne({ where: { email } });
        let passwordMatch;
        let userId;
        if (dokter) {
            data.dokterId = dokter.id;
            data.role = 'dokter';
            // Verify password
            passwordMatch = yield bcrypt_1.default.compare(password, dokter.password);
            userId = dokter.id;
        }
        else if (admin) {
            data.adminId = admin.id;
            data.role = 'admin';
            // Verify password
            passwordMatch = yield bcrypt_1.default.compare(password, admin.password);
            userId = admin.id;
        }
        // If password doesn't match, return null
        if (!passwordMatch) {
            throw new Error(`password doesn't match`);
        }
        // Generate JWT token
        const token = jsonwebtoken_1.default.sign({ userId: userId }, 'indomiegoreng2', { expiresIn: '1h' });
        // Return the JWT token
        data.token = token !== null && token !== void 0 ? token : '';
        return data;
    });
}
exports.default = RegistrationService;
