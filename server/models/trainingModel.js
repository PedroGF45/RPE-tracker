// Initialize mongoose
const mongoose = require('mongoose');

// Training Schema
const practiceSchema = new mongoose.Schema({

    // Date of training
    practideDate: {
        type: Date,
        required: true
    },

    // Duration of training
    practiceDuration: {
        type: Number,
        required: true
    },

    // Training type
    practiceType: {
        type: String,
        enum: ['Gym', 'Field', 'Match'],
        required: true
    },

    // get the userID from the User model
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Training = mongoose.model('Practice', practiceSchema);

module.exports = Practice;