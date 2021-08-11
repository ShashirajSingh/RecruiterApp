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
const axios_1 = __importDefault(require("axios"));
class default_1 {
    static repoSearch(repoName) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const url = `https://api.github.com/search/repositories?q=${repoName}`;
                const response = yield axios_1.default.get(url);
                const { data } = response;
                return data;
            }
            catch (error) {
                return error;
            }
        });
    }
    static userSearch(userName) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const url = `https://api.github.com/users/${userName}`;
                const response = yield axios_1.default.get(url);
                return response;
            }
            catch (error) {
                return error;
            }
        });
    }
}
exports.default = default_1;
//# sourceMappingURL=axios.js.map