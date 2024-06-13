import React, { useState } from 'react';
import Footer from '../components/footer/Footer';
import logo from '../assets/images/CSM_Logo.png';
import { Link } from 'react-router-dom';

const Register = () => {

    return (
        <React.Fragment>
            <div className="d-flex justify-content-center align-items-center p-0" style={{height: "100vh"}}>
                <div className="wrapper">
                    <Link to={'/'}>
                            <img alt="logo" src={logo} className="img-fluid mx-auto d-block rounded-pill" width="100" height="100"/>
                    </Link>
                    <form action="/register" method="post">         
                        <h1>Create Account</h1>
                        <div className="container input-box">
                            <input type="text" placeholder="Username" name="username" required className="rounded-pill"/>
                        </div>
                        <div className="container input-box">
                            <input type="email" placeholder="Email" name="email" required className="rounded-pill"/>
                        </div>
                        <div className="container input-box">
                            <input type="password" placeholder="Password" name="password" required className="rounded-pill"/>
                        </div>
                        <button type="submit" className="registerbtn btn rounded-pill">Sign Up</button>
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