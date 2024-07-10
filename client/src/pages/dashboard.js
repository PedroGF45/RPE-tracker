import React from 'react';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';
import RootDashboard from '../components/dashboard/rootDashboard';

const Dashboard = () => {

    return (
        <React.Fragment>
            <Navbar />  
            <RootDashboard />
            <Footer />
        </React.Fragment>
    );
}

export default Dashboard;