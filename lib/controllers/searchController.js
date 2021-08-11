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
const axios_1 = __importDefault(require("../services/axios"));
const user_1 = __importDefault(require("../models/user"));
class default_1 {
    static repoSearch(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield axios_1.default.repoSearch(req.query.q);
                const dataContents = data.items;
                if (data.total_count === 0) {
                    res.send({ message: 'There is no such repository...' });
                }
                else {
                    const output = {
                        data: [{}],
                    };
                    data.items.forEach((element) => {
                        let newResponse = {
                            repo_name: element.full_name,
                            owner_name: element.owner.login,
                            description: element.description,
                        };
                        output.data.push(newResponse);
                    });
                    res.send(output);
                }
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    static userSearch(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = { name: req.body.username };
                const userData = yield user_1.default.findOne(query);
                /* if user is present in our DB. */
                if (userData !== null) {
                    res.send(userData);
                }
                else {
                    const response = yield axios_1.default.userSearch(req.body.username);
                    if (response.data) {
                        yield user_1.default.insertMany(response);
                        res.send(response.data);
                    }
                    else {
                        res.send({ message: 'No user found' });
                    }
                }
            }
            catch (error) {
                return error;
            }
        });
    }
}
exports.default = default_1;
//# sourceMappingURL=searchController.js.map