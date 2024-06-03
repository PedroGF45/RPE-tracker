// Initialize mongoose
const mongoose = require('mongoose');

// Training Schema
const trainingSchema = new mongoose.Schema({
    date: Date,
    duration: Number,
    type: String
});

const  Training = mongoose.model('Training', trainingSchema);

module.exports = Training;