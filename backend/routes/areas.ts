import express from 'express';
import mongoose from 'mongoose';
const Area = mongoose.model('areas');
const router = express.Router();


router.post('/', async (req, res) => {
    const areas = await Area.find({});
    res.json(areas);
});

export default router;
