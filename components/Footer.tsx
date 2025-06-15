import React from "react";

const Footer = () => {
  return (
    <footer className="flex bg-[#FFE3A9]">
      <div className=" text-[#0B1D51] flex flex-col gap-5 p-4 w-1/2">
        <h1 className="text-2xl md:text-6xl font-bold">
          Stay Connected with <span className="text-[#3772FF]">FinFly</span>
        </h1>
        <p>
          Your financial journey starts here. Track, manage, and optimize your
          finances effortlessly.
        </p>
      </div>
      <div className="bg-[#FFE3A9] text-[#0B1D51] flex flex-col items-center justify-center w-1/2">
        <ul>
          <li className="text-[#0B1D51] text-lg font-semibold p-4">
            <a href="/about">About</a>
          </li>
          <li className="text-[#0B1D51] text-lg font-semibold p-4">
            <a href="/contact">Contact</a>
          </li>
          <li className="text-[#0B1D51] text-lg font-semibold p-4">
            <a href="/privacy">Privacy Policy</a>
          </li>
          <li className="text-[#0B1D51] text-lg font-semibold p-4">
            <a href="/terms">Terms of Service</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
