import React from "react";
import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="footer p-16 bg-neutral text-neutral-content">
      <div className="md:w-2/5 w-full">
        <img src={logo} alt="logo" />
        <p>
          Car Doctor Industries Ltd.
          <br />
          Providing reliable tech since 2020
        </p>
      </div>
      <div className="flex justify-between md:w-3/5 w-full">
        <div className="flex flex-col">
          <span className="footer-title">Services</span>
          <a href="/" className="link link-hover">
            Branding
          </a>
          <a href="/" className="link link-hover">
            Design
          </a>
          <a href="/" className="link link-hover">
            Marketing
          </a>
          <a href="/" className="link link-hover">
            Advertisement
          </a>
        </div>
        <div className="flex flex-col justify-around">
          <span className="footer-title">Company</span>
          <a href="/" className="link link-hover">
            About us
          </a>
          <a href="/" className="link link-hover">
            Contact
          </a>
          <a href="/" className="link link-hover">
            Jobs
          </a>
          <a href="/" className="link link-hover">
            Press kit
          </a>
        </div>
        <div className="flex flex-col justify-around">
          <span className="footer-title">Legal</span>
          <a href="/" className="link link-hover">
            Terms of use
          </a>
          <a href="/" className="link link-hover">
            Privacy policy
          </a>
          <a href="/" className="link link-hover">
            Cookie policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
