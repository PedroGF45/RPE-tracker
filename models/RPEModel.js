// initialize mongoose
const mongoose = require('mongoose');

// RPE Schema
const rpeSchema = new mongoose.Schema({
    rpe: Number,
    // get the playerID from the User model
    playerID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    // get the trainingID from the Training model
    trainingID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Training'
    }
});

const RPE = mongoose.model('RPE', rpeSchema);

module.exports = RPE;