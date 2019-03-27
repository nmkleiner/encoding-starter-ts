import express from 'express';
import mongoose from 'mongoose';

const Target = mongoose.model('targets');
const router = express.Router();


router.post('/', async (req, res) => {
    const targets = await Target.find({});
    console.log('targets');
    res.json(targets);
});

export default router;
