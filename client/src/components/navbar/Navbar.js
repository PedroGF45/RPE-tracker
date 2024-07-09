import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './navbarStyles.css';
import Header from '../header/Header';
import Logo from '../../assets/images/CSM_Logo.png';
import axios from 'axios';

// Redux
import setSelectedNav from '../../actions/navActions';
import { connect } from 'react-redux';

// Map the selectedNav state to the props of the App component
const mapStateToProps = (state) => {
    return {
        selectedNav: state.selectedNav
    };
}

// Map the setSelectedNav action to the props of the App component
const mapDispatchToProps = (dispatch) => {
    return {
        setSelectedNav: (path) => dispatch(setSelectedNav(path))
    }
}

const Navbar = (props) => {

    // Sidebar
    const [sidebar, setSidebar] = React.useState(false);

    const expandSideBar = () => { setSidebar(!sidebar); };

    // Redux state
    const { selectedNav, setSelectedNav } = props;


    const handleNavClick = (newPath) => {
        setSelectedNav(newPath); // Dispatch the action to update state
    };

    console.log("---------------");
    console.log("STATE: ", selectedNav);
    console.log("---------------");

    // Logout
    const Logout = async (e) => {
        try {
            await axios.post('/logout')
            .then(() => {
                window.location.href = '/';
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
        <div id="body-pd" className={sidebar ? "body-pd" : ""}>
            <Header onToggleSidebar={expandSideBar} />
            <div className={sidebar ? "l-navbar show" : "l-navbar"} id="nav-bar">
                <nav className="nav">
                    <div>
                        <Link to="#" className="nav_logo">
                            <img src={Logo} alt="Club" className="nav_logo-img"/>
                            <span className="nav_logo-name">C. S. Marítimo</span>
                        </Link>
                        <div className="nav-list">
                            {SidebarData.map((item, index) => {
                                return (
                                    <div 
                                        key={index} 
                                        to={item.path} 
                                        className={selectedNav === item.path ? 'nav_link active' : 'nav_link'} 
                                        onClick={() => handleNavClick(item.path)}
                                        
                                    >
                                        <i className={item.icon}></i>
                                        <span className='nav_name'>{item.title}</span>
                                    </div>
                                    
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
