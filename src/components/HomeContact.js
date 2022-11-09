import React from 'react';
import { FaClock,FaPhone,FaMap } from "react-icons/fa";

const HomeContact = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 w-9/12 mx-auto bg-black text-white p-12 rounded-md'>
            <div className='flex justify-center items-center'>
            <FaClock className='text-orange-600 text-3xl'></FaClock>
                <div className='ml-3'>
                    <p>We are open monday-friday</p>
                    <h2 className='md:text-2xl'>7:00 am - 9:00 pm</h2>
                </div>
            </div>
            <div className='flex justify-center items-center'>
            <FaPhone className='text-orange-600 text-3xl'></FaPhone>
                <div className='ml-3'>
                   <p>Have a question?</p>
                   <h2 className='md:text-2xl'>+2546 251 2658</h2>
                </div>
            </div>
            <div className='flex justify-center items-center'>
            <FaMap className='text-orange-600 text-3xl'></FaMap>
                <div className='ml-3'>
                    <p>Need a repair? our address</p>
                    <h2 className='md:text-2xl'>Liza Street, New York</h2>
                </div>
            </div>
        </div>
    );
};

export default HomeContact;