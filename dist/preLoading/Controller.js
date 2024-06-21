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
const Request_1 = require("./Request");
const Service_1 = __importDefault(require("./Service"));
function PreLoadingController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            Request_1.preLoadingRequest.check(req.body);
            const data = yield (0, Service_1.default)(req.body);
            res.status(200).send({
                resultCd: 200,
                message: 'success',
                result: true,
                data: data
            });
        }
        catch (e) {
            res.status(500).send({
                resultCd: 500,
                message: `${e.message}`,
                result: false
            });
        }
    });
}
exports.default = PreLoadingController;
