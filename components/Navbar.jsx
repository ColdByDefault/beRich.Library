'use client';

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { FaGithub, FaBrain, FaSignOutAlt  } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineDocumentScanner } from "react-icons/md";



const NavLink = ({ href, children, onClick }) => (
  <Link href={href} className="navbar-btn rounded-full" onClick={onClick}>
    {children}
  </Link>
);

const SignInButton = ({ providers }) => {
  // Map provider names to icons
  const providerIcons = {
    Google: <FcGoogle className="inline-block" />,
    GitHub: <FaGithub className="inline-block" />,
    // Add other providers and icons as needed
  };

  return (
    <div className="flex gap-2">
      <span className="text-white">Sign in with</span>
      {providers &&
        Object.values(providers).map((provider) => (
          <button
            key={provider.name}
            onClick={() => signIn(provider.id)}
            className="navbar-btn rounded-full flex justify-center items-center px-2">
            {providerIcons[provider.name]} {/* Display the icon */}
          </button>
        ))}
    </div>
  );
};


const Navbar = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [showProviderDropdown, setShowProviderDropdown] = useState(false);
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
    { href: "/create-prompt", label: "AI Prompts", icon: <FaBrain /> },
    { href: "/docs", label: "Docs", icon: <MdOutlineDocumentScanner /> },
    /* { href: "/gfn", label: "GFN+", icon: <AiOutlineGlobal /> }, */
    /* { href: "/profile", label: "Profile", icon: <AiOutlineUser /> }, */
  ];

  return (
    <nav className="sticky  top-0 left-0 right-0
    bg-black backdrop-filter backdrop-blur-lg bg-opacity-30
    shadow-lg z-50 p-3 ">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link href="/" className="flex items-center gap-2 z-10">
          <Image src="/assets/images/logo.png"
            alt="beRichHub Logo"
            width={70}
            height={70}
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
                <Image src={session.user.image}
                  alt="Profile"
                  width={30}
                  height={30}
                  className="rounded-full"/>
              </Link>
              <button type="button"
                onClick={() => signOut()}
                className="navbar-btn navbar-btn2 rounded-full p-2">
                <FaSignOutAlt className="text-xl"/>
              </button>
            </>
          ) : (
            <>
              <NavLink href="/">Home</NavLink>
              <NavLink href="/docs">Docs</NavLink>
              <SignInButton
                providers={providers}
                showDropdown={showProviderDropdown}
                setShowDropdown={setShowProviderDropdown}
                className="navbar-btn"/>
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
        <div className="sm:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-md shadow-lg p-4 z-20 flex flex-col gap-3">
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
                  <Image src={session.user.image}
                    alt="Profile"
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                </NavLink>
                <button type="button"
                  onClick={() => {
                    signOut();
                    setShowMobileMenu(false);
                  }}
                  className="navbar-btn navbar-btn2 rounded-full text-left">
                  <FaSignOutAlt />
                </button>
              </div>
            </>
          ) : (
            <>
              <NavLink href="/" onClick={() => setShowMobileMenu(false)}>
                Home
              </NavLink>
              <SignInButton
                providers={providers}
                showDropdown={showProviderDropdown}
                setShowDropdown={setShowProviderDropdown}/>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
