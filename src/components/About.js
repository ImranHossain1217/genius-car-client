import React from "react";
import person from "../assets/images/about_us/person.jpg";
import parts from "../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="md:w-1/2 relative">
            <img src={person} className="w-4/5 rounded-lg shadow-2xl" alt="" />
            <img
              src={parts}
              className="h-3/4 right-5 top-2/4 rounded-lg shadow-2xl absolute"
              alt=""
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-orange-600 font-bold text-xl md:text-3xl mb-5">
              ABOUT US
            </h1>
            <h1 className="text-2xl md:text-5xl font-bold">
              We are qualified <br /> & of experience <br /> in this field
            </h1>
            <p className="py-6">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <p className="py-6">
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable.
            </p>
            <button className="btn btn-warning rounded-md">
              Get More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
