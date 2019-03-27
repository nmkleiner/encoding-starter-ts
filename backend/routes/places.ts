import express from 'express';
import mongoose from 'mongoose';

const Place = mongoose.model('places');
const router = express.Router();


router.post('/', async (req, res) => {
    const places = await Place.find({});
    res.json(places);
});

export default router;
