import express from 'express';
import mongoose from 'mongoose';
import placesService from '../services/places.service';
const Place = mongoose.model('places');
const router = express.Router();


router.post('/', async (req, res) => {
    // const places = await Place.find({});
    const places = await placesService.query();
    // console.log('i\'m running');
    res.json(places);
});

export default router;
