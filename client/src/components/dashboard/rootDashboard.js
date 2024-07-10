import React from "react";
import HomeDashboard from "./homeDashboard";
import UsersDashboard from "./usersDashboard";
import RpeDashboard from "./RpeDashboard";
import TrainingDashboard from "./trainingDashboard";

// redux
import { connect } from "react-redux";
import setSelectedNav from '../../actions/navActions';

// Map the selectedNav state to the props of the App component
const mapStateToProps = (state) => {
    return {
        selectedNav: state.navReducer.selectedNav
    };
}

// Map the setSelectedNav action to the props of the App component
const mapDispatchToProps = (dispatch) => {
    return {
        setSelectedNav: (path) => dispatch(setSelectedNav(path))
    }
}

const RootDashboard = (props) => {

    // Redux state
    const { selectedNav, setSelectedNav } = props;

    // render dashboard item based on selectedNav
    switch(selectedNav) {
        case 'dashboard':
            return <HomeDashboard />;
        case 'users':
            return <UsersDashboard />;
        case 'rpe':
            return <RpeDashboard />;
        case 'trainings':
            return <TrainingDashboard />;
        default:
            return <HomeDashboard />;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RootDashboard);