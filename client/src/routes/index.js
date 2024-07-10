import React from 'react';
import ProtectedRoutes from './ProtectedRoutes';
import GuestRoutes from './GuestRoutes';
import { connect } from 'react-redux';
import { authSuccess } from '../actions/authActions';

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.authReducer.isAuthenticated
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        authSuccess: (data) => dispatch(authSuccess(data)),
    }
}

const Routes = (props) => {

    const { isAuthenticated,  authSuccess } = props;

    // get the token from the local storage
    const storedToken = localStorage.getItem('userToken');

    // if the token exists, dispatch the authSuccess action
    if (storedToken) {
        authSuccess(storedToken);
    }

    // if is authenticated, return the protected routes, else return the guest routes
    if (isAuthenticated) {
        return <ProtectedRoutes />
    } else {
        return <GuestRoutes />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes);