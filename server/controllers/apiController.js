// import User model
const User = require('../models/userModel');
const Team = require('../models/teamModel');
const Training = require('../models/trainingModel'); 
const RPE = require('../models/rpeModel');
const Club = require('../models/clubModel');

// import jwt
const jwt = require('jsonwebtoken');

// get secret key
const secret = process.env.SECRET;

// get all users from db
const getUsers = async (req, res) => {
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

// get all teams from db
const getTeams = async (req, res) => {
    try {
        // request from db
        console.log("Requesting teams from db...");
        const teams = await Team.find();

        // send the response
        res.send(teams);
        console.log(teams);
    }
    catch (err) {
        console.log(err);
    }
};

// get team enums
const getTeamEnums = async (req, res) => {
    try {
        // request from db
        console.log("Requesting team enums from db...");

        // get enumValues for teamLevel
        const teamEnums = await Team.schema.path('teamLevel').enumValues;

        // send the response
        res.send(teamEnums);
        console.log(teamEnums);
    }
    catch (err) {
        console.log(err);
    }
};

// get all clubs from db
const getClubs = async (req, res) => {
    try {
        // request from db
        console.log("Requesting clubs from db...");
        const clubs = await Club.find();

        // send the response
        res.send(clubs);
        console.log(clubs);
    }
    catch (err) {
        console.log(err);
    }
};

// create club
const apiClub = async (req, res) => {
    try {
        // create a club
        console.log("Creating club...");
        const club = await Club.create({clubName: req.body.clubName});
        console.log(club);
        res.send(club);
    }
    catch (err) {
        console.log(err);
    }
};

// create team
const apiTeam = async (req, res) => {
    try {
        // create a team
        console.log("Creating team...");

        console.log(req.body);

        const team = await Team.create({teamLevel: req.body.teamLevel, clubID: req.body.clubID});

        res.send(team);
    }
    catch (err) {
        console.log(err);
    }
};

// create training
const apiTraining = async (req, res) => {
    try {
        // create a training
        console.log("Creating training...");
        const training = await Training.create({name: "Training 1"});
        console.log(training);
        res.send(training);
    }
    catch (err) {
        console.log(err);
    }
};

// create RPE
const apiRPE = async (req, res) => {
    try {
        // get all users from db
        console.log("Getting users...");
        const rpe = await RPE.create({name: "RPE 1"});
        console.log(rpe);
        res.send(rpe);
    }
    catch (err) {
        console.log(err);
    }
};

// get user role with jwt and data base
const getUserRole = async function (req, res) {

    // Get jwt token 
    const token = req.cookies.authToken;

    // Decode token
    const decoded = jwt.verify(token, secret);

    // Get user id
    const userId = decoded.userID;

    try {
        // Find user in data base
        const user = await User.findById(userId);

        // Get user role
        res.send({role: user.userRole});

    } catch (err) {

        console.log(err);

    } finally {

        console.log("User role sent");
    }
};

// get token
const getToken = async function (req, res) {

    // Get jwt token
    const token = req.cookies.authToken;

    // Send token
    res.send({token: token});
}

module.exports = {
    getUsers,
    getTeams,
    getTeamEnums,
    getClubs,
    apiClub,
    apiTeam,
    apiTraining,
    apiRPE,
    getUserRole,
    getToken
};