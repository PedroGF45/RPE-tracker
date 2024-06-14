import React from 'react';
import { useAuth } from '../contexts/AuthContext';

import ProtectedRoutes from './ProtectedRoutes';
import GuestRoutes from './GuestRoutes';

const Routes = () => {

    const { isLoggedIn } = useAuth();

    console.log("isLoggedIn: ", isLoggedIn);

    return isLoggedIn ? <ProtectedRoutes /> : < GuestRoutes/>;
};

export default Routes;