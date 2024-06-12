import React, { useState } from 'react';
import Footer from '../components/footer/Footer';
import logo from '../assets/images/CSM_Logo.png';
import { Link } from 'react-router-dom';

const Register = () => {

    return (
        <React.Fragment>
            <div class="d-flex justify-content-center align-items-center p-0" style={{height: "100vh"}}>
                <div class="wrapper">
                    <Link to={'./'}>
                            <img src={logo} class="img-fluid mx-auto d-block rounded-pill" width="100" height="100"/>
                    </Link>
                    <form action="/register" method="post">         
                        <h1>Create Account</h1>
                        <div class="container input-box">
                            <input type="text" placeholder="Username" name="username" required class="rounded-pill"/>
                            <i class="bx bx-user"></i>
                        </div>
                        <div class="container input-box">
                            <input type="email" placeholder="Email" name="email" required class="rounded-pill"/>
                            <i class="bx bx-envelope"></i>
                        </div>
                        <div class="container input-box">
                            <input type="password" placeholder="Password" name="password" required class="rounded-pill"/>
                            <i class="bx bx-lock-alt"></i>
                        </div>
                        <button type="submit" class="registerbtn btn rounded-pill">Sign Up</button>
                        <div class="register-link">
                            <p class="text-center">Already have an account? <a href="/login">Login</a></p>    
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    );
};

export default Register;