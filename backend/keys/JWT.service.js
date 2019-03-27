"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// use 'utf8' to get string instead of byte array  (512 bit key)
var privateKEY = fs_1.default.readFileSync('keys/private.key', 'utf8');
var publicKEY = fs_1.default.readFileSync('keys/public.key', 'utf8');
var sign = function (payload, $Options) {
    var signOptions = {
        issuer: $Options.issuer,
        subject: $Options.subject,
        audience: $Options.audience,
        expiresIn: '30d',
        algorithm: 'RS256',
    };
    return jsonwebtoken_1.default.sign(payload, privateKEY, signOptions);
};
var verify = function (token, $Options) {
    var verifyOptions = {
        issuer: $Options.issuer,
        subject: $Options.subject,
        audience: $Options.audience,
        expiresIn: '30d',
        algorithm: ['RS256'],
    };
    try {
        return jsonwebtoken_1.default.verify(token, publicKEY, verifyOptions);
    }
    catch (err) {
        // console.log('err', err);
        return false;
    }
};
var middleware = function (req, res, next) {
    var _a = req.body, token = _a.token, options = _a.options;
    var isLoginOrSignupRequest = !!req.body.email;
    if (isLoginOrSignupRequest) {
        next();
    }
    else {
        try {
            var isVerified = verify(token, options);
            if (!isVerified) {
                throw new Error('unauthorized');
            }
            else {
                next();
            }
        }
        catch (err) {
            console.error(err);
        }
    }
};
exports.default = {
    middleware: middleware,
    sign: sign,
};
