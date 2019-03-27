import express from 'express';
import mongoose from 'mongoose';
import jwtService from '../keys/JWT.service';

const User = mongoose.model('users');
const router = express.Router();

router.post('/login', async (req, res) => {
    const {email, password} = req.body;

    try {
        // @ts-ignore
        const user: User = await User.findOne({email});

        if (!user) {
            throw new Error('email');
        } else if (user.password !== password) {
            throw new Error('password');
        } else {
            const payload = {data: 'data'};
            const options = {issuer: 'compie', subject: 'game of thrones', audience: user.email};
            const token = await jwtService.sign(payload, options);
            res.json({user, token});
        }

    } catch (err) {
        return res.status(404).json({message: err.message});
    }
});


router.post('/signup', async (req, res) => {
    const signupData = req.body;
    signupData.password = signupData.password1;
    delete signupData.password1;
    delete signupData.password2;
    try {
        const userByEmail = await User.findOne({email: signupData.email});
        const userByUserName = await User.findOne({username: signupData.username});
        if (userByEmail) {
            throw new Error('email');
            // res.json({emailError: 'Email already registered'})
        } else if (userByUserName) {
            throw new Error('username');
            // res.json({usernameError: 'Username already in use'})
        } else {
            const user = new User(signupData);
            user.save((err, val) => {
                res.json(val);
            });
        }
    } catch (err) {
        return res.status(400).json({message: err.message});
    }
});


export default router;
