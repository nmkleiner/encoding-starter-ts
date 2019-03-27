import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// Create Schema
const AreaSchema = new Schema({
    img: {
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
mongoose.model('areas', AreaSchema, 'areas');
