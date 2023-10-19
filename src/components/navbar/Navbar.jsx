"use client"

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="py-3 bg-zinc-900 top-0 z-50 sticky h-16 flex items-center">
      <div className="navbar container px-6 mx-auto flex items-center justify-between">
        {/* Brand for Desktop */}
        <Link href="/" className="hidden md:flex items-center gap-3">
          <img src="/brand/logo_white.svg" alt="" className="w-8" />
          <p className="text-white text-xl font-bold glow">MIKI THOMAS</p>
        </Link>

        {/* Menu for Desktop */}
        <nav className="hidden md:flex md:items-center md:w-auto menu text-gray-400">
          <ul className="flex items-center gap-5 font-medium">
            <li
              className="transition ease-in-out hover:text-gray-100"
              onClick={closeMenu}
            >
              <Link href="/">Inicio</Link>
            </li>
            <li
              className="transition ease-in-out hover:text-gray-100"
              onClick={closeMenu}
            >
              <Link href="/" className="text-gray-700 cursor-not-allowed">Sobre mi</Link>
            </li>
            <li
              className="transition ease-in-out hover:text-gray-100"
              onClick={closeMenu}
            >
              <Link href="/" className="text-gray-700 cursor-not-allowed">Eventos</Link>
            </li>
            <li
              className="transition ease-in-out hover:text-gray-100"
              onClick={closeMenu}
            >
              <Link href="/" className="text-gray-700 cursor-not-allowed">Contacto</Link>
            </li>
          </ul>
        </nav>

        {/* Brand for Mobile */}
        <Link href="/" className="md:hidden flex items-center gap-3">
          <img src="/brand/logo_white.svg" alt="" className="w-6" />
          <p className="text-white text-md sm:text-lg font-bold glow">MIKI THOMAS</p>
        </Link>

        {/* Hamburger Icon for Mobile */}
        {/* <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </div> */}

        {/* Mobile Menu */}
        {/* <nav
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:hidden absolute top-14 left-0 right-0 bg-zinc-900 bg-opacity-80 text-gray-400 z-20`}
        >
          <ul className="flex flex-col items-center gap-3 p-4">
            <li
              className="transition ease-in-out hover:text-gray-100 hover:bg-zinc-800 rounded-sm w-full text-center py-1 cursor-pointer"
              onClick={closeMenu}
            >
              <Link href="/">Inicio</Link>
            </li>
            <li
              className="transition ease-in-out hover:text-gray-100 hover:bg-zinc-800 rounded-sm w-full text-center py-1 cursor-pointer"
              onClick={closeMenu}
            >
              <Link href="/sobre-mi">Sobre mi</Link>
            </li>
            <li
              className="transition ease-in-out hover:text-gray-100 hover:bg-zinc-800 rounded-sm w-full text-center py-1 cursor-pointer"
              onClick={closeMenu}
            >
              <Link href="/eventos">Eventos</Link>
            </li>
            <li
              className="transition ease-in-out hover:text-gray-100 hover:bg-zinc-800 rounded-sm w-full text-center py-1 cursor-pointer"
              onClick={closeMenu}
            >
              <Link href="/contacto">Contacto</Link>
            </li>
            <li
              className="transition ease-in-out hover:text-gray-100 hover:bg-zinc-800 rounded-sm w-full text-center py-1 cursor-pointer"
              onClick={closeMenu}
            >
              <Link href="/tienda">Tienda</Link>
            </li>
          </ul>
        </nav> */}
      </div>
    </header>
  );
};

export default Navbar;