import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// Create Schema
const TargetSchema = new Schema({
    active: {
        type: Boolean,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    SerialNum: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    location: {
        type: Object,
        required: true,
    },
    area: {
        type: Schema.Types.ObjectId,
        ref: 'areas',
    },
});

// Create collection and add schema
mongoose.model('targets', TargetSchema, 'targets');
