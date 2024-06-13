import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './navbarStyles.css';
import Header from '../header/Header';
import Logo from '../../assets/images/CSM_Logo.png';
import axios from 'axios';

const Navbar = () => {

    // Sidebar
    const [sidebar, setSidebar] = React.useState(false);

    const expandSideBar = () => { setSidebar(!sidebar); };

    const linkColor = document.querySelectorAll('.nav_link')
    
    function colorLink(){
        if(linkColor){
            linkColor.forEach(l=> l.classList.remove('active'));
            this.classList.add('active');
        }
    }

    linkColor.forEach(l=> l.addEventListener('click', colorLink));

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
                                    <Link key={index} to={item.path} className={item.cName}>
                                        <i className={item.icon}></i>
                                        <span className='nav_name'>{item.title}</span>
                                    </Link>
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

export default Navbar;
