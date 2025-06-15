import Link from "next/link";
import React from "react";
import { MdDashboard } from "react-icons/md";
import logo from "@/public/logo.png";
import Image from "next/image";
import { MdOutlineSavings } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="w-15 md:w-54 md:pl-10 min-h-screen bg-[#FFE3A9] rounded-2xl text-[#0B1D51] items-start p-4 fixed flex flex-col shadow-lg ">
      <div className="flex items-center mb-4 ">
        <Link
          href="/"
          className="flex items-center gap-2 md:gap-4 hover:cursor-pointer"
        >
          <Image
            src={logo}
            alt="FinFly Logo"
            width={0}
            height={0}
            className="w-6 md:w-8 md:h-8 rounded-4xl"
          />
          <h1 className="hidden md:flex text-xl md:text-2xl font-bold text-[#0B1D51]">
            FinFly
          </h1>
        </Link>
      </div>
      <div className="flex items-center mb-4 ">
        <Link href="/dashboard" className="flex items-center">
          <MdDashboard className="text-2xl mr-2" />
          <p className="hidden md:flex">Transaction</p>
        </Link>
      </div>
      <div className="flex items-center mb-4 ">
        <Link href="/dashboard/savings" className="flex items-center">
          <MdOutlineSavings className="text-2xl mr-2" />
          <p className="hidden md:flex">Savings</p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
