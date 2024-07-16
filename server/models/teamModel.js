// initialize Mongoose
const mongoose = require('mongoose');

// Team Schema
const teamSchema = new mongoose.Schema({
    
    // Team name
    teamLevel: {
        type: String,
        enum: ['U-13', 'U-14', 'U-15', 'U-16', 'U-17', 'U-18', 'U-19', 'Senior'],
        required: true
    },
    
    // Team members
    teamMembers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],

    // Club ID
    clubID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Club',
        required: true
    }
    
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;
