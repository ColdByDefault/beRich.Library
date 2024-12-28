'use client';

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { signOut, useSession } from "next-auth/react";
import { FaBrain, FaSignOutAlt  } from "react-icons/fa";
import { VscSignIn } from "react-icons/vsc";



const NavLink = ({ href, children, onClick }) => (
  <Link href={href} className="rounded-full" onClick={onClick}>
    {children}
  </Link>
);




const Navbar = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const fetchProviders = async () => {
      const response = await (await import('next-auth/react')).getProviders();
      setProviders(response);
    };
    fetchProviders();
  }, []);

  const navLinks = [
    { href: "/", label: "Home", icon: <AiOutlineHome /> },
    { href: "/docs", label: "Library", icon: <MdOutlineDocumentScanner /> },
    { href: "/create-prompt", label: "AI Prompts", icon: <FaBrain /> },
  ];

  const navLinksGuest = [
    { href: "/", label: "Home", icon: <AiOutlineHome /> },
    { href: "/docs", label: "Library", icon: <MdOutlineDocumentScanner /> },
  ];

  return (
    <nav className="relative
    bg-black backdrop-filter backdrop-blur-lg bg-opacity-30
    shadow-lg z-50 p-3 ">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link href="/" className="flex items-center gap-2 z-10">
          <Image src="/assets/images/logo.png"
            alt="beRichHub"
            width={80}
            height={80}
          />
        </Link>

        <div className="hidden sm:flex items-center gap-3 md:gap-5 z-10">
          {session?.user ? (
            <>
              {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href}>
                <div className="flex items-center space-x-2 text-gray-400 hover:text-white">
                  {link.icon}
                  <span>{link.label}</span>
                </div>
              </NavLink>
              ))}
              <Link href="/profile">
                <Image src={session.user.image || "/assets/images/profile.svg"}
                  alt="Profile"
                  width={30}
                  height={30}
                  className="rounded-full"/>
              </Link>
              <button
                type="button"
                onClick={() => signOut({ callbackUrl: "/" })}
                className="text-white p-2 hover:text-gray-500">
                <FaSignOutAlt className="text-xl" />
              </button>

            </>
          ) : (
            <>
              {navLinksGuest.map((link) => (
                <NavLink key={link.href} href={link.href}>
                  <div className="flex items-center space-x-2 text-white hover:text-gray-300">
                    {link.icon}
                    <span>{link.label}</span>
                  </div>
                </NavLink>
              ))}
              <Link
              href="/auth/signin"
              className="px-1 py-2 "
              onClick={() => setShowMobileMenu(false)}>
              <span className="flex gap-2 items-center text-white hover:text-gray-600">Sign-In<VscSignIn /></span>
              </Link>
            </>
          )}
        </div>
        <button className="sm:hidden z-10 bg-white rounded-md px-3 py-2"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          aria-label="Toggle mobile menu">
          ☰
        </button>
      </div>
      {showMobileMenu && (
        <div className="sm:hidden absolute top-full left-0 right-0 bg-black/90 text-white
        backdrop-blur-md shadow-lg p-4 z-20 flex flex-col gap-3">
          {session?.user ? (
            <>
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  href={link.href}
                  onClick={() => setShowMobileMenu(false)}>
                  {link.label}
                </NavLink>
              ))}
              <div className="flex gap-2">
                <NavLink href="/profile" onClick={() => setShowMobileMenu(false)} className="block my-2">
                  <Image src={session.user.image || "/assets/images/profile.svg"}
                    alt="Profile"
                    width={30}
                    height={30}
                    className="rounded-full border"
                  />
                </NavLink>
                <button
                    type="button"
                    onClick={() => signOut({ callbackUrl: "/" })}
                    className="text-white p-2 hover:text-gray-500">
                    <FaSignOutAlt className="text-xl" />
                  </button>
              </div>
            </>
          ) : (
            <>
              <NavLink href="/" onClick={() => setShowMobileMenu(false)}>
                Home
              </NavLink>
              <NavLink href="/docs" onClick={() => setShowMobileMenu(false)}>
                Library
              </NavLink>
              <Link
              href="/auth/signin"
              className="px-1 py-2 "
              onClick={() => setShowMobileMenu(false)}>
              <span className="flex gap-2 items-center text-white hover:text-gray-600">Sign-In<VscSignIn /></span>
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
