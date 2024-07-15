// initialize Mongoose
const mongoose = require('mongoose');

// Team Schema
const teamSchema = new mongoose.Schema({
    
    // Team name
    name: {
        type: String,
        required: true
    },

    
    // Team logo
    logo: {
        type: Buffer,
        required: true
    },
    
    // Team members
    teamMembers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;
