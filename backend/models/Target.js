"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
// Create Schema
var TargetSchema = new Schema({
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
mongoose_1.default.model('targets', TargetSchema, 'targets');
