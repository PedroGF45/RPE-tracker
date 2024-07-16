// initialize mongoose
const mongoose = require('mongoose');

// RPE Schema
const rpeSchema = new mongoose.Schema({
    
    // RPE value
    rpe: Number,

    // get the trainingID from the Training model
    trainingID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Training',
        required: true
    },

    // timestamp of when RPE is created
    rpeDate: {
        type: Date,
        default: Date.now,
        required: true
    }
});

const RPE = mongoose.model('RPE', rpeSchema);

module.exports = RPE;