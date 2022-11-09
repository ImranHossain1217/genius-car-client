import React, { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="w-11/12 mx-auto my-5">
      <div className="text-center mb-5">
        <h3 className="md:text-3xl text-xl text-orange-600 font-bold uppercase">
          Service
        </h3>
        <h1 className="text-3xl md:text-5xl my-4 font-semibold">
          Our Service Area
        </h1>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, <br /> or randomised words which don't look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="md:w-2/12 w-5/12 mx-auto mt-5">
        <button className="btn btn-outline btn-warning">More Services</button>
      </div>
    </div>
  );
};

export default Services;
