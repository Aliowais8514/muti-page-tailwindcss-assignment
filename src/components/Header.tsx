"use client";
import Link from "next/link";
import React, { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi"; // Hamburger and Close icons
import { FaShoppingCart } from "react-icons/fa"; // Shopping Cart icon

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Fixed typo here

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle Menu open/close
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Close menu
  };

  return (
    <header className="bg-[#659287] text-white py-5 flex justify-between items-center px-10 relative z-10">
      <div className="flex items-center space-x-3  ">
        <img className="h-10 w-10 rounded-full" src="/logo1.jpg" alt="" />
        <h1 className="text-2xl font-bold">Clothes World</h1>
      </div>
 
      {/* Desktop Navbar */}
      <nav className="hidden md:flex gap-10 text-white font-bold transform transition-transform duration-300">
        <Link className="hover:border-b-2 hover:border-b-pink-400" href="/" onClick={closeMenu}>
          Home
        </Link>
        <Link className="hover:border-b-2 hover:border-b-pink-400" href="/about" onClick={closeMenu}>
          About
        </Link>
        <Link className="hover:border-b-2 hover:border-b-pink-400 ease-linear" href="/clothes" onClick={closeMenu}>
          Clothes
        </Link>
        <Link className="hover:border-b-2 hover:border-b-pink-300" href="/contact" onClick={closeMenu}>
          Contact
        </Link>
        <FaShoppingCart className="hover:border-b-2 hover:border-b-pink-400 ease-linear" style={{ color: "white", fontSize: "20px" }} />
      </nav>

      {/* Mobile Navbar (Hamburger menu) */}
      <div className="md:hidden flex items-center">
        <HiMenuAlt3 className="text-white text-3xl cursor-pointer" onClick={toggleMenu} />
      </div>

      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? "block" : "hidden"} absolute top-0 left-0 w-full h-full bg-blue-500 p-5 md:hidden font-bold z-20`}>
        {/* Close Button */}
        <div className="flex justify-end">
          <HiX
            className="text-white text-3xl cursor-pointer border-2 rounded-md border-[#03a9fc]"
            onClick={toggleMenu} // Close menu when clicked
          />
        </div>
        <nav className="flex   items-center gap-3 text-white font-bold">
          <Link className="hover:boder-b hover:border-b-gray-900" href="/" onClick={closeMenu}>
            Home
          </Link>
          <Link className="hover:boder-b hover:border-b-gray-900" href="/about" onClick={closeMenu}>
            About
          </Link>
          <Link className="hover:boder-b hover:border-b-gray-900" href="/clothes" onClick={closeMenu}>
            Clothes
          </Link>
          <Link href="/contact" onClick={closeMenu}>
            Contact
          </Link>
          <FaShoppingCart style={{ color: "white", fontSize: "20px" }} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
