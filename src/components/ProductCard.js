import React from "react";
import product1 from "../assets/images/products/1.png";
import product2 from "../assets/images/products/2.png";
import product3 from "../assets/images/products/3.png";
import product4 from "../assets/images/products/4.png";
import product5 from "../assets/images/products/5.png";
import product6 from "../assets/images/products/6.png";
import { FaStar } from "react-icons/fa";

const ProductCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-11/12 mx-auto">
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={product1} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Car Engine Plug</h2>
          <p className="text-orange-600 text-lg font-semibold">Price: $20.00</p>
        </div>
        <div className="text-orange-600 flex mb-3 ml-3">
          <FaStar></FaStar>
          <FaStar></FaStar>
          <FaStar></FaStar>
          <FaStar></FaStar>
          <FaStar></FaStar>
        </div>
      </div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={product2} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Car Air Filter</h2>
          <p className="text-orange-600 text-lg font-semibold">Price: $20.00</p>
        </div>
        <div className="text-orange-600 flex mb-3 ml-3">
          <FaStar></FaStar>
          <FaStar></FaStar>
          <FaStar></FaStar>
          <FaStar></FaStar>
          <FaStar></FaStar>
        </div>
      </div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={product3} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Cools Led Light</h2>
          <p className="text-orange-600 text-lg font-semibold">Price: $20.00</p>
        </div>
        <div className="text-orange-600 flex mb-3 ml-3">
          <FaStar></FaStar>
          <FaStar></FaStar>
          <FaStar></FaStar>
          <FaStar></FaStar>
          <FaStar></FaStar>
        </div>
      </div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={product4} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Cools Led Light</h2>
          <p className="text-orange-600 text-lg font-semibold">Price: $20.00</p>
        </div>
        <div className="text-orange-600 flex mb-3 ml-3">
          <FaStar></FaStar>
          <FaStar></FaStar>
          <FaStar></FaStar>
          <FaStar></FaStar>
          <FaStar></FaStar>
        </div>
      </div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={product5} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Cools Led Light</h2>
          <p className="text-orange-600 text-lg font-semibold">Price: $20.00</p>
        </div>
        <div className="text-orange-600 flex mb-3 ml-3">
          <FaStar></FaStar>
          <FaStar></FaStar>
          <FaStar></FaStar>
          <FaStar></FaStar>
          <FaStar></FaStar>
        </div>
      </div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={product6} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Cools Led Light</h2>
          <p className="text-orange-600 text-lg font-semibold">Price: $20.00</p>
        </div>
        <div className="text-orange-600 flex mb-3 ml-3">
          <FaStar></FaStar>
          <FaStar></FaStar>
          <FaStar></FaStar>
          <FaStar></FaStar>
          <FaStar></FaStar>
        </div>
      </div>
    </div>
      
    
  );
};

export default ProductCard;
