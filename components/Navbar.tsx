"use client";

import Image from "next/image";
import React, { useState } from "react";
import logo from "@/public/logo.png";
import Link from "next/link";
import { IoMdMenu } from "react-icons/io";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#FFE3A9] flex flex-col md:flex-row items-start md:items-center justify-between md:px-17 sticky top-0 z-50 shadow-md">
      {/* Logo */}
      <div className="flex items-center justify-between w-full md:w-auto p-4">
        <Link
          href="/"
          className="flex items-center gap-2 md:gap-4 hover:cursor-pointer"
        >
          <Image
            src={logo}
            alt="FinFly Logo"
            width={0}
            height={0}
            className="w-8 h-8 rounded-4xl"
          />
          <h1 className="text-xl md:text-2xl font-bold text-[#0B1D51]">
            FinFly
          </h1>
        </Link>
        <button
          className="md:hidden text-[#0B1D51]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <IoMdMenu size={24} />
        </button>
      </div>

      {/* Navigation Links */}
      <ul
        className={`${
          isOpen ? "flex" : "hidden"
        } md:flex items-center gap-4 text-[#0B1D51] font-semibold px-4 pb-4 md:pb-0`}
      >
        <li className="hover:text-[#3772FF] duration-100">
          <Link href="/about">About</Link>
        </li>
        <li className="hover:text-[#3772FF] duration-100">
          <Link href="/contact">Transaction</Link>
        </li>
        <li className="hover:text-[#3772FF] duration-100">
          <Link href="/dashboard">Analytics</Link>
        </li>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <li className="bg-[#0B1D51] hover:bg-[#3772FF] text-white px-4 py-2 rounded-2xl duration-100 ">
            <SignUpButton mode="modal">Sign Up</SignUpButton>
          </li>
        </SignedOut>
        <SignedOut>
          <li className="bg-[#0B1D51] hover:bg-[#3772FF] text-white px-4 py-2 rounded-2xl duration-100">
            <SignInButton mode="modal">Sign In</SignInButton>
          </li>
        </SignedOut>
      </ul>
    </nav>
  );
};

export default Navbar;
