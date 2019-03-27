import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// Create Schema
const PlaceSchema = new Schema({
    icon: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});

// Create collection and add schema
mongoose.model('devices', PlaceSchema, 'devices');
