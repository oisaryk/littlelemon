import React from 'react';
import HeaderElement from '../../shared/HeaderElement';
import HeroSection from './HeroSection';
import Specials from './Specials';
import Footer from '../../shared/Footer';

const Home = () => {
    return (
        <>
            <HeaderElement/>
            <HeroSection/>
            <Specials/>
            <Footer/>
        </>
    )
}

export default Home