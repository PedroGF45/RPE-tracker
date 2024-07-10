import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './navbarStyles.css';
import Header from '../header/Header';
import Logo from '../../assets/images/CSM_Logo.png';
import axios from 'axios';

// Redux
import { connect } from 'react-redux';
import setSelectedNav from '../../actions/navActions'; //nav actions
import {logout} from '../../actions/authActions'; //auth actions

// Map the selectedNav state to the props of the App component
const mapStateToProps = (state) => {
    return {
        selectedNav: state.navReducer.selectedNav,
        expandedHeader: state.headerReducer.expandedHeader
    };
}

// Map the setSelectedNav action to the props of the App component
const mapDispatchToProps = (dispatch) => {
    return {
        setSelectedNav: (path) => dispatch(setSelectedNav(path)),
        logout: () => dispatch(logout())
    }
}

const Navbar = (props) => {

    // Redux state
    const { selectedNav, setSelectedNav, expandedHeader, logout } = props;

    const handleNavClick = (newPath) => {
        setSelectedNav(newPath); // Dispatch the action to update state
    };

    /* Debugging 
    console.log("---------------");
    console.log("STATE: ", selectedNav);
    console.log("---------------");
    */
   
    // Logout
    const Logout = async (e) => {

        e.preventDefault();

        // Send a POST request to the server
        try {
            await axios.post('/logout')
            .then(() => {
                window.location.href = '/';

                // Dispatch the logout action
                logout();

                // Remove the token from the local storage
                localStorage.removeItem('userToken');
            })
            .catch(err => {
                console.error('Logout error:', err);
            });
        } catch (error) {
            console.error('Logout error:', error);
            // Handle logout errors (optional)
        }
    }

    return (
        <div id="body-pd" className={expandedHeader ? "body-pd" : ""}>
            <Header />
            <div className={expandedHeader ? "l-navbar show" : "l-navbar"} id="nav-bar">
                <nav className="nav">
                    <div>
                        <Link to="#" className="nav_logo">
                            <img src={Logo} alt="Club" className="nav_logo-img"/>
                            <span className="nav_logo-name">C. S. Marítimo</span>
                        </Link>
                        <div className="nav-list">
                            {SidebarData.map((item, index) => {
                                return (
                                    <a 
                                        key={index} 
                                        to={item.path} 
                                        className={selectedNav === item.path ? 'nav_link active' : 'nav_link'} 
                                        onClick={() => handleNavClick(item.path)}
                                    > 
                                    
                                        <i className={item.icon}></i>
                                        <span className='nav_name'>{item.title}</span>
                                    </a>
                                    
                                );
                            })}
                            
                        </div>
                    </div>
                    <Link to="#" className="nav_link" id="logout" onClick={Logout}>
                        <i className="bx bx-log-out nav_icon"></i>
                        <span className="nav_name">Logout</span>
                    </Link>
                </nav>
            </div>
        </div> 
    ) 
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
