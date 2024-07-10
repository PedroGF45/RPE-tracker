import React from 'react';
import './headerStyles.css';
import Profile from '../../assets/images/profile.jpeg';

// redux
import { connect } from 'react-redux';
import toggleHeader from '../../actions/headerActions';

// Map the sidebar state to the props of the Header component
const mapStateToProps = (state) => {
    return {
        expandedHeader: state.headerReducer.expandedHeader
    }
}

// Map the toggleSidebar action to the props of the Header component
const mapDispatchToProps = (dispatch) => {
    return {
        toggleHeader: () => dispatch(toggleHeader())
    }
}

const Header = (props) => {
    
    // Sidebar
    const [menu, setMenu] = React.useState(false);

    // Redux state
    const { expandedHeader, toggleHeader } = props;

    return (
        <header className={expandedHeader ? "header-pd header" : "header"} id="header">
            <div className="header_toggle"> 
                <i className={expandedHeader ? "bx bx-x" : "bx bx-menu"} id="header-toggle" onClick={props.toggleHeader}></i>
            </div>
            <div className="header_img"> 
                <img alt="profile" src={Profile} /> 
            </div>
        </header>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);