// initialize mongoose
const mongoose = require('mongoose');

// RPE Schema
const rpeSchema = new mongoose.Schema({
    
    // RPE value
    rpe: Number,

    // get the trainingID from the Training model
    trainingID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Training'
    },

    // timestamp of when RPE is created
    timestamp: {
        type: Date,
        default: Date.now
    }
});

const RPE = mongoose.model('RPE', rpeSchema);

module.exports = RPE;