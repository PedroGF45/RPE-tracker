import React from "react";
import HomeDashboard from "./homeDashboard";
import UsersDashboard from "./usersDashboard";
import RpeDashboard from "./RpeDashboard";
import TrainingDashboard from "./trainingDashboard";
import ClubDashboard from "./clubDashboard";
import TeamDashboard from "./teamDashboard";
import ServerDashboard from "./serverDashboard";

// redux
import { connect } from "react-redux";

// Map the selectedNav state to the props of the App component
const mapStateToProps = (state) => {
    return {
        selectedNav: state.navReducer.selectedNav
    };
}

const RootDashboard = (props) => {

    // Redux state
    const { selectedNav } = props;

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
        case 'clubs':
            return <ClubDashboard />;
        case 'teams':
            return <TeamDashboard />;
        case 'server':
            return <ServerDashboard />;
        default:
            return <HomeDashboard />;
    }
}

export default connect(mapStateToProps)(RootDashboard);