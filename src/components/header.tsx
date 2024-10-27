"use client";

import Image from "next/image";
import Link from "next/link";
import LogoPic from "@/assets/images/logo.png";
import { FaSearch, FaShoppingCart, FaBars } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className=" bg-yellow-50 p-5 fixed w-full z-20 ">
      <div className="flex flex-wrap place-items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center font-bold">
          <h2 className="mt-3 text-2xl">Let&apos;sFood</h2>
          <Image
            src={LogoPic}
            alt="Logo"
            width={40}
            height={40}
            quality={100}
            style={{ objectFit: "contain" }}
          />
        </div>


         {/* Hamburger menu for small screens */}
        <div className="lg:hidden flex items-center">
          <FaBars
            className={`text-lg cursor-pointer transition-transform duration-200 ${isMenuOpen ? "rotate-90" : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>


        {/* Navigation Links */}
        <nav
          className={`lg:flex flex-grow justify-center ${
            isMenuOpen ? "bg-transparent shadow-lg" : "hidden"
          } lg:block absolute lg:static top-full left-0 right-0 bg-yellow-50`}

        >
          <ul className="flex flex-col lg:flex-row gap-6 mx-auto mt-4 lg:mt-0 lg:gap-6">
            <li>
              <Link href="/" className="text-lg font-medium text-gray-500 border-b-4 rounded pb-1 border-transparent hover:border-yellow-400 hover:text-black" onClick={() => setIsMenuOpen(false)}>Home</Link>
            </li>
            <li>
              <Link href="/how-it-work" className="text-lg font-medium text-gray-500 border-b-4 rounded pb-1 border-transparent hover:border-yellow-400 hover:text-black" onClick={() => setIsMenuOpen(false)}>How-it-work</Link>
            </li>
            <li>
              <Link href="/menu" className="text-lg font-medium text-gray-500 border-b-4 rounded pb-1 border-transparent hover:border-yellow-400 hover:text-black" onClick={() => setIsMenuOpen(false)}>Menu</Link>
            </li>

            <li>
              <Link href="/about" className="text-lg font-medium text-gray-500 border-b-4 rounded pb-1 border-transparent hover:border-yellow-400 hover:text-black" onClick={() => setIsMenuOpen(false)}>About</Link>
            </li>

            <li>
              <Link href="/contact" className="text-lg font-medium text-gray-500 border-b-4 rounded pb-1 border-transparent hover:border-yellow-400 hover:text-black" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </li>

          </ul>
        </nav>


        <div className="hidden lg:flex gap-10">
          <FaShoppingCart className="text-lg hover:text-yellow-500" />
          <FaSearch className="text-lg hover:text-yellow-500 thin-icon" />
        </div>
      </div>

      {/* Cart & Search icons for small screens */}
      <div className="flex lg:hidden justify-end gap-10 mt-4">
        <FaShoppingCart className="text-lg hover:text-yellow-500" />
        <FaSearch className="text-lg hover:text-yellow-500 thin-icon" />
      </div>
    </header>
  );
}
