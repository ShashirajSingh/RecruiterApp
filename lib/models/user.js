"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const UserSchema = new mongoose_1.default.Schema({
    _id: String,
    name: String,
    data: {
        type: Object,
    },
});
exports.default = mongoose_1.default.model(`${process.env.COLLECTION_NAME}`, UserSchema);
//# sourceMappingURL=user.js.map