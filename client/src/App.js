import React from 'react';
import Routes from './routes';

// Context
import { AuthProvider } from './contexts/AuthContext';

const App = () => {
    return (
        <AuthProvider>
            <Routes />
        </AuthProvider>
    );
}

// Connect the App component to the Redux store
export default App;
