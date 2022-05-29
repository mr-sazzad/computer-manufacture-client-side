import React from 'react';
import Banner from './Banner';
import Footer from './Footer/Footer';
import HomeParts from './HomeParts';
import Reviews from './Reviews';
import Summery from './Summery/Summery';
import Supplyers from './Supplyers/Supplyers';
import WeAreLookingFor from './WeAreLookingFor';

const Home = () => {
  
    return (
        <div className='bg-slate-100'>
            <Banner />
            <div className='lg:mx-10 mx-5'>
                <HomeParts />
                <Summery />
                <Reviews />
                <Supplyers />
                <WeAreLookingFor />
            </div>
                <Footer />
        </div>
    );
};

export default Home;