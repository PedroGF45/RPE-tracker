import React, { useEffect, useState } from "react";
import axios from "axios";

const HomeDashboard = () => {

    // state for clubs
    const [clubs, setClubs] = useState([]);

    // state for team enums
    const [teamEnums, setTeamEnums] = useState([]);

    useEffect(() => {

        const getClubs = async () => {
            try {
                // make a get request to the server to getClubs
                const res = await axios.get("/api/getClubs");
                console.log(res.data);

                // set the clubs state variable
                setClubs(res.data);
            }
            catch (err) {
                console.log(err);
            }
        }

        const getTeamEnums = async () => {
            try {
                // make a get request to the server to getTeamEnums
                const res = await axios.get("/api/getTeamEnums");
                console.log(res.data);

                setTeamEnums(res.data);
            } catch (err) {
                console.log(err);
            }
        }

        getClubs();
        getTeamEnums();
    }, []);

    return (
        <div className="body-pd">
            <h1>Home Dashboard</h1>

            <div>
                <form action="/api/club" method="post">
                    <label htmlFor="clubName">Club Name</label>
                    <input type="text" name="clubName" required/>

                    <br/>

                    <button type="submit">Create Club</button>
                </form>
            </div>

            <br/>

            <div>
                <form action="/api/team" method="post">
                    <label htmlFor="teamLevel">Team Level</label>
                    <select name="teamLevel" required>
                        {teamEnums.map((teamEnum) => (
                            <option key={teamEnum} value={teamEnum}>{teamEnum}</option>
                        ))}
                    </select>

                    <br/>

                    <label htmlFor="clubID">Club ID</label>
                    <select name="clubID" required>
                        {clubs.map((club) => (
                            <option key={club._id} value={club._id}>{club.clubName}</option>
                        ))}
                    </select>
                    
                    <br/>

                    <button type="submit">Create Team</button>
                </form> 
            </div>
            
            <br/>

            <div>
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
            </div>
            
            <br/>

            <div>
                <form action="/api/rpe" method="post">
                    <label htmlFor="rpeValue">RPE Date</label>
                    <input type="number" name="rpeValue" required/>
                    <br/>
                    <button type="submit">Create RPE</button>
                </form>
            </div>
            
            
        </div>
    );
}

export default HomeDashboard;