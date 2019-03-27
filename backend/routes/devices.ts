import express from 'express';
import mongoose from 'mongoose';
const Device = mongoose.model('devices');
const router = express.Router();


router.post('/', async (req, res) => {
    const devices = await Device.find({});
    res.json(devices);
});

export default router;
