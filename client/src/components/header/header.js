import React from 'react';
import './headerStyles.css';
import Profile from '../../assets/images/profile.jpeg';
import axios from 'axios';

const Header = ({ onToggleSidebar }) => {
    // Sidebar
    const [menu, setMenu] = React.useState(false);

    const handleToggle = () => {
        if (onToggleSidebar) { // Check if prop is passed
            onToggleSidebar(); // Call the prop function if available
        }
        setMenu(!menu);
    };

    return (
        <header className={menu ? "header-pd header" : "header"} id="header">
            <div className="header_toggle"> 
                <i className={menu ? "bx bx-x" : "bx bx-menu"} id="header-toggle" onClick={handleToggle}></i>
            </div>
            <button>Check User</button>
            <div className="header_img"> 
                <img alt="profile" src={Profile} /> 
            </div>
        </header>
    )
}

export default Header;