import React from 'react';
import Banner from '../components/banner';
import About from '../components/about';
import Services from '../components/services';
import Testimonials from '../components/testimonials';
import Contact from '../components/contact';

const Home = () => {
    return (
        <>
            <Banner />
            <About />
            <Services />
            <Testimonials />
            <Contact />
        </>
    )
}

export default Home;
