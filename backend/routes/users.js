"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var JWT_service_1 = __importDefault(require("../keys/JWT.service"));
var User = mongoose_1.default.model('users');
var router = express_1.default.Router();
router.post('/login', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var _a, email, password, user, payload, options, token, err_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, email = _a.email, password = _a.password;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 7, , 8]);
                return [4 /*yield*/, User.findOne({ email: email })];
            case 2:
                user = _b.sent();
                if (!!user) return [3 /*break*/, 3];
                throw new Error('email');
            case 3:
                if (!(user.password !== password)) return [3 /*break*/, 4];
                throw new Error('password');
            case 4:
                payload = { data: 'data' };
                options = { issuer: 'compie', subject: 'game of thrones', audience: user.email };
                return [4 /*yield*/, JWT_service_1.default.sign(payload, options)];
            case 5:
                token = _b.sent();
                res.json({ user: user, token: token });
                _b.label = 6;
            case 6: return [3 /*break*/, 8];
            case 7:
                err_1 = _b.sent();
                return [2 /*return*/, res.status(404).json({ message: err_1.message })];
            case 8: return [2 /*return*/];
        }
    });
}); });
router.post('/signup', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var signupData, userByEmail, userByUserName, user, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                signupData = req.body;
                signupData.password = signupData.password1;
                delete signupData.password1;
                delete signupData.password2;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, User.findOne({ email: signupData.email })];
            case 2:
                userByEmail = _a.sent();
                return [4 /*yield*/, User.findOne({ username: signupData.username })];
            case 3:
                userByUserName = _a.sent();
                if (userByEmail) {
                    throw new Error('email');
                    // res.json({emailError: 'Email already registered'})
                }
                else if (userByUserName) {
                    throw new Error('username');
                    // res.json({usernameError: 'Username already in use'})
                }
                else {
                    user = new User(signupData);
                    user.save(function (err, val) {
                        res.json(val);
                    });
                }
                return [3 /*break*/, 5];
            case 4:
                err_2 = _a.sent();
                return [2 /*return*/, res.status(400).json({ message: err_2.message })];
            case 5: return [2 /*return*/];
        }
    });
}); });
exports.default = router;
