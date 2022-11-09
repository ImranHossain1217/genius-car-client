import React from 'react';
import About from './About';
import Banner from './Banner';
import HomeContact from './HomeContact';
import Product from './Product';
import Services from './Services';

const Home = () => {
    return (
        <div className='max-w-screen-xl mx-auto my-10'>
        <Banner></Banner>
        <About></About>
        <Services></Services>
        <div className='hidden md:block mt-10'>
        <HomeContact></HomeContact>
        </div>
        <Product></Product>
            
        </div>
    );
};

export default Home;