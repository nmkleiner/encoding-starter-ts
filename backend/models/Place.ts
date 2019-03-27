import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// Create Schema
const PlaceSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});

// Create collection and add schema
mongoose.model('places', PlaceSchema, 'places');
