import React from 'react';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import About from '../components/About';
import FAQ from '../components/FAQ';
import Testimonials from '../components/Testimonials';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <SEO />
            <Navbar />
            <Hero />
            <Benefits />
            <About />
            <Testimonials />
            <FAQ />
            <Footer />
            <FloatingWhatsApp />
        </>
    );
};

export default Home;
