import React from 'react';
import Navigation from '../components/Navigation';
import Paysageimg from '../components/Paysageimg';
import Logements from '../components/Logements'
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <Navigation />
            <Paysageimg />
            <Logements/>
            <Footer/>
        </>
    );
};

export default Home;