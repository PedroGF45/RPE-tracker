import React from "react";

const HomeDashboard = () => {

    return (
        <div className="body-pd">
            <h1>Home Dashboard</h1>

            <form action="/api/team" method="post">
                <label htmlFor="teamName">Team Name</label>
                <input type="text" name="teamName" required/>
                <br/>

                <label htmlFor="teamLogo">Team Logo</label>
                <input type="file" name="teamLogo" required/>
                <br/>

                <button type="submit">Create Team</button>
            </form> 
            
            <br/>

            <form action="/api/training" method="post">
                <label htmlFor="trainingDate">Training Name</label>
                <input type="date" name="trainingDate" required/>
                <br/>

                <label htmlFor="trainingDuration">Training Date</label>
                <input type="number" name="trainingDuration" required/>
                <br/>

                <label htmlFor="trainingType">Training Time</label>
                <input type="string" name="trainingType" required/>
                <br/>

                <button type="submit">Create Training</button>
            </form>

            <br/>

            <form action="/api/rpe" method="post">

                <label htmlFor="rpeValue">RPE Date</label>
                <input type="number" name="rpeValue" required/>
                <br/>
                <button type="submit">Create RPE</button>
            </form>
            
        </div>
    );
}

export default HomeDashboard;