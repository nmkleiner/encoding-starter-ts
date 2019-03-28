import express from 'express';
// import mongoose from 'mongoose';
import placesService from '../services/places.service';
// const Place = mongoose.model('places');
const router = express.Router();


router.post('/', async (req, res) => {
    // const places = await Place.find({});
    const {filter} = req.body;
    console.log('filter',filter);
    const places = await placesService.query(filter);
    res.json(places);
});

export default router;
