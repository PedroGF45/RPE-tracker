// Initialize mongoose
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

// User schema
const userSchema = new mongoose.Schema({

    userEmail: {
        type: String,
        required: true,
        unique: true
    },

    UserRole : {
        type: String,
        enum: ['admin', 'coach', 'player'],
        required: true
    },

    userPhoto: {
        type: Buffer,
    },
});

// passport-local-mongoose setup (password hashing and salting, username)
userSchema.plugin(passportLocalMongoose);

// User model
const User = mongoose.model('User', userSchema);

// export user model
module.exports = User;