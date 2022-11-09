import React from 'react';

import ProductCard from './ProductCard';

const Product = () => {
   
    return (
        <div className='mt-5'>
            <h2 className='text-xl md:text-2xl text-orange-600 uppercase font-bold text-center'>Popular Products</h2>
            <h1 className='text-3xl md:text-5xl font-bold text-center my-3'>Browse Our Products</h1>
            <p className='text-center'>the majority have suffered alteration in some form, by injected humour, <br /> or randomised words which don't look even slightly believable. </p>
            <div className='mt-5'>
               <ProductCard></ProductCard>
            </div>
            <div className='md:w-2/12 w-5/12 mx-auto mt-5'>
                <button className='btn btn-outline btn-warning'> More Products</button>
            </div>
        </div>
    );
};

export default Product;