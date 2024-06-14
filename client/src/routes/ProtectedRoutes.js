import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';

const ProtectedRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/dashboard" element={<Dashboard/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default ProtectedRoutes;