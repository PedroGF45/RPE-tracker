import React, { useState } from 'react';
import Footer from '../components/footer/Footer';
import logo from '../assets/images/CSM_Logo.png';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {

    const [username, setUsername] = useState("");
    const [userEmail, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(''); // State for error message

    const handleRegister = async (e) => {

        e.preventDefault();

        try {
            const res = await axios.post('/register', {
                userEmail: userEmail,
                username: username,
                password: password
            });

            if (res.status === 200) {
                window.location.href = '/login';
            } else if (res.status === 500){
                setErrorMessage(res.data.message);
            } else {
                setErrorMessage('An error occurred while registering');
            }

        } catch (error) {

            setErrorMessage('An error occurred while registering');

        }
    };

    return (
        <React.Fragment>
            <div className="d-flex justify-content-center align-items-center p-0" style={{height: "100vh"}}>
                <div className="wrapper">
                    <Link to={'/'}>
                            <img alt="logo" src={logo} className="img-fluid mx-auto d-block rounded-pill" width="100" height="100"/>
                    </Link>
                    <form onSubmit={handleRegister}>         
                        <h1>Create Account</h1>
                        <div className="container input-box">
                            <input type="text" placeholder="Username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required className="rounded-pill"/>
                        </div>
                        <div className="container input-box">
                            <input type="email" placeholder="Email" name="userEmail" value={userEmail} onChange={(e) => setEmail(e.target.value)} required className="rounded-pill"/>
                        </div>
                        <div className="container input-box">
                            <input type="password" placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="rounded-pill"/>
                        </div>
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                        <button type="submit" className="registerbtn btn rounded-pill" >Sign Up</button>
                        <div className="register-link">
                            <p className="text-center">Already have an account? <a href="/login">Login</a></p>    
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    );
};

export default Register;