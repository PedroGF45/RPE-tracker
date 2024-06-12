// Initialize mongoose
const mongoose = require('mongoose');

// Training Schema
const trainingSchema = new mongoose.Schema({
    date: Date,
    duration: Number,
    type: String,

    // get the userID from the User model
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const  Training = mongoose.model('Training', trainingSchema);

module.exports = Training;