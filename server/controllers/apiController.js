// import User model
const User = require('../models/userModel');

// get all users from db
const apiUsers = async (req, res) => {
    try {
        // request from db
        console.log("Requesting users from db...");
        const users = await User.find();

        // send the response
        res.send(users);
        console.log(users);
    }
    catch (err) {
        console.log(err);
    }
};

module.exports = {
    apiUsers
};