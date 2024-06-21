"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSignIn = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function isSignIn(req, res, next) {
    const { Auth } = req.body;
    if (!Auth) {
        return res.status(401).send({
            result: false,
            resultCd: 500,
            message: `login required`
        });
    }
    try {
        const payload = jsonwebtoken_1.default.verify(Auth, 'indomiegoreng2');
        // Check if the payload contains an expiration time
        if (payload && typeof payload.exp === 'number') {
            // Extend expiration time to 15 days if the token is not expired yet
            if (payload.exp * 1000 > Date.now()) {
                payload.exp = Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 15; // Extend expiration to 15 days
                const newToken = jsonwebtoken_1.default.sign(payload, 'indomiegoreng2');
                req.body['user'] = payload;
                req.body['newToken'] = newToken;
            }
        }
        next();
    }
    catch (error) {
        return res.status(401).send({
            result: false,
            resultCd: 500,
            message: error.message
        });
    }
}
exports.isSignIn = isSignIn;
