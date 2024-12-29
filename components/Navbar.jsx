'use client';

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineDocumentScanner } from "react-icons/md";

const NavLink = ({ href, children, onClick }) => (
  <Link href={href} className="rounded-full" onClick={onClick}>
    {children}
  </Link>
);

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const navLinks = [
    { href: "/", label: "Home", icon: <AiOutlineHome /> },
    { href: "/docs", label: "Library", icon: <MdOutlineDocumentScanner /> },
  ];

  return (
    <nav
      className="relative
    bg-black backdrop-filter backdrop-blur-lg bg-opacity-30
    shadow-lg z-50 p-3 "
    >
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link href="/" className="flex items-center gap-2 z-10">
          <Image
            src="/assets/images/logo.png"
            alt="beRichHub"
            width={80}
            height={80}
          />
        </Link>

        <div className="hidden sm:flex items-center gap-3 md:gap-5 z-10">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href}>
              <div className="flex items-center space-x-2 text-white hover:text-gray-300">
                {link.icon}
                <span>{link.label}</span>
              </div>
            </NavLink>
          ))}
        </div>
        <button
          className="sm:hidden z-10 bg-white rounded-md px-3 py-2"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          aria-label="Toggle mobile menu"
        >
          ☰
        </button>
      </div>
      {showMobileMenu && (
        <div
          className="sm:hidden absolute top-full left-0 right-0 bg-black/90 text-white
        backdrop-blur-md shadow-lg p-4 z-20 flex flex-col gap-3"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              onClick={() => setShowMobileMenu(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
