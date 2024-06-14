import React from "react";
import logo from '../assets/images/CSM_Logo.png';
import Footer from '../components/footer/Footer';
import { Link } from 'react-router-dom';

const Home = () => {
 
    return (
        <React.Fragment>
            <div className="d-flex justify-content-center align-items-center p-0" style={{height: "100vh"}}>
                <div className="wrapper">
                    <img src={logo} alt="CSMaritimo" className="img-fluid mx-auto d-block rounded-pill" width="200" height="200"/>
                    <Link to={'./login'}>
                        <button type="submit" className="btn rounded-pill log">Login</button>
                    </Link>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    );
};

export default Home;