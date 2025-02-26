'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="flex justify-between items-center px-8 py-4 cursor-pointer relative">
      {/* Logo */}
      <Link href="/" className="h-12 w-15">
        <img src="/assets/logoak.png" alt="logo" className="w-full h-full" />
      </Link>

      {/* Hamburger Menu Icon */}
      {!isMenuOpen && (
        <div className="h-4 cursor-pointer" onClick={handleMenuToggle}>
          <img src="/assets/MenuIcon.png" alt="menu" className="w-full h-full" />
        </div>
      )}

      {/* Slide-out Menu */}
      <div
        className={`absolute top-0 left-0 w-full h-screen bg-gray-800 bg-opacity-95 flex flex-col items-center justify-center z-50 transform transition-transform duration-1000 ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* Close Icon */}
        <div
          className="absolute top-6 right-12 text-white text-5xl cursor-pointer"
          onClick={handleMenuToggle}
        >
          &times;
        </div>
        {/* Navigation Links */}
        <nav className="flex flex-col items-center space-y-6 text-white text-4xl font-bold">
          <Link
            href="/portfolio"
            className="hover:text-orange-400 transition"
            onClick={handleMenuToggle}
          >
            Portfolio
          </Link>
          <Link
            href="/about"
            className="hover:text-orange-400 transition"
            onClick={handleMenuToggle}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-orange-400 transition"
            onClick={handleMenuToggle}
          >
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
