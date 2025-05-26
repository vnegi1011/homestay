"use client";

import Link from "next/link";
import { useState } from "react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-primary text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl sm:text-2xl font-bold">
          <Link href="/">Kedar Darshan & Umesh Homestay</Link>
        </h1>
        {/* Hamburger Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
        {/* Navigation Links */}
        <ul
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row md:space-x-6 absolute md:static top-16 left-0 right-0 bg-primary md:bg-transparent p-4 md:p-0 z-50`}
        >
          <li className="py-2 md:py-0">
            <Link
              href="/"
              className="text-white hover:text-accent transition-colors"
            >
              Home
            </Link>
          </li>
          <li className="py-2 md:py-0">
            <Link
              href="/contact"
              className="text-white hover:text-accent transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
