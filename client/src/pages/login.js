import React from "react";
import { Link } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import logo from '../assets/images/CSM_Logo.png';


const Login = () => {

    return (
        <React.Fragment>
            <div className="d-flex justify-content-center align-items-center p-0" style={{height: "100vh"}}>
                <div className="wrapper">
                    <Link to={'./'}>
                        <img src={logo} alt="logo" className="img-fluid mx-auto d-block rounded-pill" width="100" height="100"/>
                    </Link>
                    <form action="/login" method="POST">
                        <h1>Login</h1>
                        <div className="container input-box">
                            <input type="text" placeholder="Username" name="username" required className="rounded-pill"/>
                            <i className="bx bx-user"></i>
                        </div>
                        <div className="container input-box">
                            <input type="password" placeholder="Password" name="password" required className="rounded-pill"/>
                            <i className="bx bx-lock-alt"></i>
                        </div>
                        <button type="submit" className="sign btn rounded-pill">Sign in</button>
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

export default Login;