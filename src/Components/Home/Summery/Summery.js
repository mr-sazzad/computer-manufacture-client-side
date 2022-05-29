import React from 'react';
import client from '../../../assets/icon/client.png';
import flag from '../../../assets/icon/flag.png';
import review from '../../../assets/icon/review.png';
import './Summery.css';

const Summery = () => {
    return (
        <div className="card lg:card shadow-xl bg-neutral lg:mx-10">
        <h1 className='text-4xl font-bold text-sky-400 mb-5 mt-10 text-center'>MILLIONS BUSINESS TRUST US</h1>
        <h5 className='text-xl text-blue-900 font-semibold text-center
        '>TRY TO UNDERSTAND USERS EXPECTATION</h5>
        
        <div className='flex flex-col justify-center lg:flex-row lg:justify-around my-10'>
            <div className='details-card mt-7'>
                <img src={flag} alt='' />
                <h2 className='text-xl font-medium text-center'>2 Countries</h2>
            </div>
            <div className='details-card mt-7'>
                <img src={client} alt='' />
                <h2 className='text-xl font-medium text-center'>100+ Client</h2>
            </div>
            <div className='details-card mt-7'>
                <img src={review} alt='' />
                <h2 className='text-xl font-medium text-center'>60+ Reviews</h2>
            </div>
           
        </div>
  </div>
    );
};

export default Summery;