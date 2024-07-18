import React from "react";
import axios from "axios";

const ServerDashboard = () => {

    async function requestUserRole() {
        
        const res = await axios.get('/api/getUserRole');

        console.log("Respotas do servidor:");
        console.log(res);

    }

    return (
        <div className="body-pd">
            <h1>Server Dashboard</h1>
            <button onClick={requestUserRole}>Get User Role</button>
        </div>
    );
}

export default ServerDashboard;