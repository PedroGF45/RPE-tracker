import React from 'react';
import ProtectedRoutes from './ProtectedRoutes';
import GuestRoutes from './GuestRoutes';

// redux
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    isAuthenticated: state.authReducer.isAuthenticated, // Include isAuthenticated
});

const Routes = (props) => {

    const isAuthenticated = props.isAuthenticated;
    console.log("IsAuthenticated nas rotas: ", isAuthenticated);

    return isAuthenticated ? <ProtectedRoutes /> : < GuestRoutes/>;
};

export default connect(mapStateToProps)(Routes);