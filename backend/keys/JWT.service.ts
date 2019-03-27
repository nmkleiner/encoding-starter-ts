import fs from 'fs';
import jwt from 'jsonwebtoken';


// use 'utf8' to get string instead of byte array  (512 bit key)
const privateKEY = fs.readFileSync('keys/private.key', 'utf8');
const publicKEY = fs.readFileSync('keys/public.key', 'utf8');

interface Jwt$Options {
    issuer: string;
    subject: string;
    audience: string;
}

interface Request {
    body: {
        email: string,
        token: string,
        options: Jwt$Options,
    };
}

const sign = (payload: {}, $Options: Jwt$Options) => {
    const signOptions = {
        issuer: $Options.issuer,
        subject: $Options.subject,
        audience: $Options.audience,
        expiresIn: '30d',
        algorithm: 'RS256',
    };
    return jwt.sign(payload, privateKEY, signOptions);
};

const verify = (token: string, $Options: Jwt$Options) => {
    const verifyOptions = {
        issuer: $Options.issuer,
        subject: $Options.subject,
        audience: $Options.audience,
        expiresIn: '30d',
        algorithm: ['RS256'],
    };
    try {
        return jwt.verify(token, publicKEY, verifyOptions);
    } catch (err) {
        // console.log('err', err);
        return false;
    }
};

const middleware = (req: Request, res: object, next: () => void) => {
    const {token, options} = req.body;

    const isLoginOrSignupRequest = !!req.body.email;
    if (isLoginOrSignupRequest) {
        next();
    } else {
        try {
            const isVerified = verify(token, options);
            if (!isVerified) {
                throw new Error('unauthorized');
            } else {
                next();
            }
        } catch (err) {
            console.error(err);
        }
    }
};


export default {
    middleware,
    sign,
};
