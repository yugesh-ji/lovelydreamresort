import React, { Fragment } from 'react';
import Hero from '../components/hero';
import Navbar from '../components/Navbar'
import SearchSection from '../components/SearchSection';
import About from '../components/about';
import BlogSection from '../components/BlogSection';
import Destination from '../components/Destination';
import FunFact from '../components/FunFact';
import Newslatter from '../components/Newslatter/Newslatter';
import PricingSection from '../components/PricingSection';
import Rooms from '../components/Rooms/Rooms';
import ServiceSection from '../components/ServiceSection';
import Testimonial from '../components/Testimonial';
import Footer from '../components/footer';
import Scrollbar from '../components/scrollbar'
import Logo from '/public/images/logo.png'

// Home Style 1 - Main Page
const HomePage = () => {

    return (
        <Fragment>
            <Navbar topbarBlock={'wpo-header-style-1'} Logo={Logo} />
            <Hero />
            <SearchSection />
            <Rooms />
            <About />
            <FunFact fClass={'wpo-fun-fact-section-s2 section-padding'} />
            <Destination />
            <ServiceSection />
            <PricingSection />
            <Testimonial />
            {/* <BlogSection /> */}
            <Newslatter />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

// Home Style 2 - Commented Out
/*
const HomePage2 = () => {
    return (
        <Fragment>
            <Navbar topbarBlock={'wpo-header-style-1'} Logo={Logo} />
            <Hero2 />
            <SearchSection />
            <About2 />
            <Destination />
            <FunFact fClass={'section-padding'} />
            <Rooms />
            <ServiceSection2 />
            <PricingSection />
            <Testimonial />
            <BlogSection />
            <Newslatter />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
*/

// Home Style 3 - Commented Out
/*
const HomePage3 = () => {
    return (
        <Fragment>
            <Navbar hclass={"wpo-header-style-4"} Logo={Logo} />
            <Hero3 />
            <SearchSection svClass={'wpo-select-section-s2'} />
            <About3 />
            <FunFact fClass={'wpo-fun-fact-section-s2 section-padding pt-0'} />
            <ServiceSection2 />
            <Destination dClass={'section-padding'} />
            <Rooms3 />
            <PricingSection />
            <Testimonial />
            <BlogSection />
            <Newslatter />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
*/

export default HomePage;