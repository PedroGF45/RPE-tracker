// Initialize mongoose
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

// User schema
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    role : {
        type: String,
        default: 'player' // can be admin, coach, player
    }
});

// passport-local-mongoose setup (password hashing and salting, username)
userSchema.plugin(passportLocalMongoose);

// User model
const User = mongoose.model('User', userSchema);

// export user model
module.exports = User;