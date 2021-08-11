"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = __importDefault(require("express"));
const searchController_1 = __importDefault(require("../controllers/searchController"));
const router = express_1.default.Router();
exports.routes = router;
router.get('/', (req, res) => {
    res.send('HomePage');
});
router.get('/repo', searchController_1.default.repoSearch);
//# sourceMappingURL=index.js.map