import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Footer from '../components/footer/Footer';
import logo from '../assets/images/CSM_Logo.png';

// Redux
import { connect } from 'react-redux';
import {authRequest, authSuccess, authError, logout} from "../actions/authActions";

// Map the auth state to the props of the App component
const mapStateToProps = (state) => {
    return {
        isLoading: state.authReducer.isLoading,
        user: state.authReducer.user,
        error: state.authReducer.error
    };
}

// Map the auth actions to the props of the App component
const mapDispatchToProps = (dispatch) => {
    return {
        authRequest: () => dispatch(authRequest()),
        authSuccess: (data) => dispatch(authSuccess(data)),
        authError: (error) => dispatch(authError(error)),
        logout: () => dispatch(logout())
    }
}

const Login = (props) => {

    const [username, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(''); // State for error message

    const { authRequest, authSuccess, authError } = props;

    // Use the navigate hook
    const navigate = useNavigate();

    const handleLogin = async (e) => {

        e.preventDefault();

        try {
            // Send a POST request to the server
            const res = await axios.post('/login', {
                username: username,
                password: password
            });

            // If the request is successful, redirect to the dashboard
            if (res.status === 200) {

                try {
                    // request token
                    const res = await axios.get('/api/getToken');

                    //console.log("Token:");
                    //console.log(res.data.token);

                    // Dispatch the authSuccess action
                    authSuccess(res.data.token);

                } catch (error) {
                    console.log(error);
                } finally {

                    // Redirect to the dashboard
                    navigate('/dashboard');
                }

            } else if (res.status === 401) {
                setErrorMessage('Invalid username or password');
                authError('Invalid username or password');
            } else {
                setErrorMessage('An error occurred while logging in');
                authError('An error occurred while logging in');
            } 
            
        } catch (error) {
            authError('Invalid username or password');
            setErrorMessage('Invalid username or password');
        }
    };

    return (
        <React.Fragment>
            <div className="d-flex justify-content-center align-items-center p-0" style={{height: "100vh"}}>
                <div className="wrapper">
                    <Link to={'/'}>
                        <img src={logo} alt="logo" className="img-fluid mx-auto d-block rounded-pill" width="100" height="100"/>
                    </Link>
                    <form onSubmit={handleLogin}>
                        <h1>Login</h1>
                        <div className="container input-box">
                            <input type="text" placeholder="Username" name="username" value={username} onChange={(e) => setUser(e.target.value)} required className="rounded-pill"/>
                        </div>
                        <div className="container input-box">
                            <input type="password" placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="rounded-pill"/>
                        </div>
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                        <button type="submit" className="sign btn rounded-pill" onClick={authRequest}>Sign in</button>
                        <div className="register-link">
                            <p className="text-center">Don't have an account? <a href="/register">Register</a></p>    
                        </div>
                        
                    </form>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    );
        

};

export default connect(mapStateToProps, mapDispatchToProps)(Login);