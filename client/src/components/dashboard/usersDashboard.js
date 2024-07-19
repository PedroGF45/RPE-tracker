import React, { useEffect, useState } from "react";
import axios from "axios";

const UsersDashboard = () => {

    // create a state variable to store the users
    const [users, setUsers] = useState([]);

    // create a state variable to store the teams
    const [teams, setTeams] = useState([]);

    // get all users from the db
    useEffect(() => {
        const getUsers = async () => {
            try {
                // make a get request to the server
                const res = await axios.get("/api/getUsers");

                // set the users state variable
                setUsers(res.data);

            }
            catch (err) {
                console.log(err);
            }
        }

        const getTeams = async () => {
            try {
                // make a get request to the server
                const res = await axios.get("/api/getTeams");

                // set the users state variable
                setTeams(res.data);
            }
            catch (err) {
                console.log(err);
            }
        }

        getUsers();
        getTeams();
    }, []);

    return (
        <div className="body-pd">
            <h1>Users</h1>
                <ul>
                    {users.map((user) => (
                        <li key={user._id}>{user.username} : {user.userRole}</li>
                    ))}
                </ul>

            <br/>

            <h1>Teams</h1>
                <ul>
                    {teams.map((team) => (
                        <><li key={team._id}>{team.name}</li><img src={team.logo} alt="team logo" /></>
                    ))}
                </ul>
                
        </div>
    );
}

export default UsersDashboard;