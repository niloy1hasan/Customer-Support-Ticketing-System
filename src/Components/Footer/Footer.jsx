import React from "react";

const Footer = () => {
  return (
    <div className="bg-neutral py-10 mt-14">
      <footer className="footer max-w-[1600px] w-[93%] mx-auto sm:footer-horizontal border-b border-[#FAFAFA]/10 p-10">
        <div>
          <h6 className="font-bold text-white text-[16px]">
            CS — Ticket System
          </h6>
          <p className="max-w-[230px] text-[#A1A1AA]">
            CS — Ticket System is printing and typesetting industry. CS — Ticket
            System has been the industry's standard text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to
            make a type specimen book.
          </p>
        </div>
        <nav className="text-[#A1A1AA] font-normal">
          <h6 className="font-semibold text-white">Company</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Our Mission</a>
          <a className="link link-hover">Contact Saled</a>
        </nav>
        <nav className="text-[#A1A1AA] font-normal">
          <h6 className="font-semibold text-white">Services</h6>
          <a className="link link-hover">Products & Servicess</a>
          <a className="link link-hover">Customer Stories</a>
          <a className="link link-hover">Download Apps</a>
        </nav>
        <nav className="text-[#A1A1AA] font-normal">
          <h6 className="font-semibold text-white">Information</h6>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Terms & Conditions</a>
          <a className="link link-hover">Join Us</a>
        </nav>
        <nav className="text-[#A1A1AA] font-normal">
          <h6 className="font-semibold text-white">Social Links</h6>
          <a className="link link-hover flex gap-2 items-center">
            <div className="w-6 h-6 bg-white rounded-full flex justify-center items-center">
              <i className="fa-brands fa-x-twitter text-black"></i>
            </div>{" "}
            <p>@CS — Ticket System</p>
          </a>
          <a className="link link-hover flex gap-2 items-center">
            <div className="w-6 h-6 bg-white rounded-full flex justify-center items-center">
              <i className="fa-brands fa-linkedin-in text-black"></i>
            </div>{" "}
            <p>@CS — Ticket System</p>
          </a>
          <a className="link link-hover flex gap-2 items-center">
            <div className="w-6 h-6 bg-white rounded-full flex justify-center items-center">
              <i className="fa-brands fa-facebook-f text-black"></i>
            </div>{" "}
            <p>@CS — Ticket System</p>
          </a>
          <a className="link link-hover flex gap-2 items-center">
            <div className="w-6 h-6 bg-white rounded-full flex justify-center items-center">
              <i className="fa-solid fa-envelope text-black"></i>
            </div>{" "}
            <p>support@cst.com</p>
          </a>
        </nav>
      </footer>
      <p className="text-center !font-extralight text-sm text-white pt-5">
        © 2025 CS — Ticket System. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
