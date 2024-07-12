import React, { useEffect, useState } from "react";
import axios from "axios";

const UsersDashboard = () => {

    // create a state variable to store the users
    const [users, setUsers] = useState([]);

    // get all users from the db
    useEffect(() => {
        const getUsers = async () => {
            try {
                // make a get request to the server
                const res = await axios.get("/api/users");

                // set the users state variable
                setUsers(res.data);
            }
            catch (err) {
                console.log(err);
            }
        }
        getUsers();
    }, []);

    return (
        <div className="body-pd">
            <h1>Users Dashboard</h1>
                    <ul>
                        {users.map((user) => (
                            <li key={user._id}>{user.username} : {user.role}</li>
                        ))}
                    </ul>
        </div>
    );
}

export default UsersDashboard;