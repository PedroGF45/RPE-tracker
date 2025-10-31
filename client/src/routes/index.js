import React, { useEffect, useState } from 'react';
import ProtectedRoutes from './ProtectedRoutes';
import GuestRoutes from './GuestRoutes';
import { connect } from 'react-redux';
import { authSuccess } from '../actions/authActions';
import axios from 'axios';

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.authReducer.isAuthenticated
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        authSuccess: (data) => dispatch(authSuccess(data)),
        updateRole: (role) => dispatch(updateRole(role))
    }
}

const Routes = (props) => {

    const { isAuthenticated,  authSuccess } = props;
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        
        // get token from server
        async function getToken() {
            try {
                // request token
                const res = await axios.get('/api/getToken');

                console.log("Token:");
                console.log(res.data.token);

                if (res.data.token) {
                    // Dispatch the authSuccess action
                    authSuccess(res.data.token); 
                }

                // Set loading to false
                setLoading(false);

            } catch (error) {
                console.log(error);
            } 
        }

        // get user role from server and update redux state
        async function getUserRole() {
            if (isAuthenticated) {
                try {
                    // request user role from server
                    const res = await axios.get('/api/getUserRole');
                    
                    updateRole(res.data.role);

                } catch (error) {

                    console.log(error);
                }
            }
        }

        getToken();
        getUserRole();
    },);

    return (
        <div>
            {isLoading ? <div></div> : isAuthenticated ? <ProtectedRoutes /> : <GuestRoutes />}
        </div>
    );

    
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes);