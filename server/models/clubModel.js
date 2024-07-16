// improt mongoose
const mongoose = require('mongoose');

// Define schema
const Schema = mongoose.Schema;

const clubSchema = new Schema({
    clubName: {
        type: String,
        unique: true,
        required: true
    },

    clubLogo: {
        type: Buffer,
        required: true
    }
});

// Create model
const Club = mongoose.model('Club', clubSchema);

// Export model
module.exports = Club;