'use client';

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";

const NavLink = ({ href, children, onClick }) => (
  <Link href={href} className="navbar-btn rounded-full" onClick={onClick}>
    {children}
  </Link>
);

const SignInButton = ({ providers, showDropdown, setShowDropdown }) => (
  <div className="relative">
    <button
      type="button"
      className="navbar-btn rounded-full"
      onClick={() => setShowDropdown(!showDropdown)}
    >
      Sign In
    </button>
    {showDropdown && providers && (
      <div className="absolute top-full mt-4 bg-black/50 shadow-lg rounded-lg p-4 left-0">
        {Object.values(providers).map((provider) => (
          <button
            key={provider.name}
            onClick={() => signIn(provider.id)}
            className="block w-full text-left p-2 navbar-btn rounded-full"
          >
            {provider.name}
          </button>
        ))}
      </div>
    )}
  </div>
);

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
    { href: "/", label: "Home" },
    { href: "/create-prompt", label: "AI Prompts" },
    { href: "/docs", label: "Docs" },
    /* { href: "/gfn", label: "GFN+" }, */
    /* { href: "/profile", label: "Profile" }, */
  ];

  return (
    <nav className="sticky  top-0 left-0 right-0
    bg-black backdrop-filter backdrop-blur-lg bg-opacity-30
    shadow-lg z-50 p-3 ">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link href="/" className="flex items-center gap-2 z-10">
          <Image
            src="/assets/images/logo.png"
            alt="beRichHub Logo"
            width={100}
            height={100}
          />
          <p className="hidden lg:block text-white text-[10px]">.Library V.3.2.1</p>
        </Link>

        <div className="hidden sm:flex items-center gap-3 md:gap-5 z-10">
          {session?.user ? (
            <>
              {navLinks.map((link) => (
                <NavLink key={link.href} href={link.href}>
                  {link.label}
                </NavLink>
              ))}
              <Link href="/profile">
                <Image
                  src={session.user.image}
                  alt="Profile"
                  width={30}
                  height={30}
                  className="rounded-full"
                />
              </Link>
              <button
                type="button"
                onClick={() => signOut()}
                className="navbar-btn navbar-btn2 rounded-full"
              >
                Sign Out
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
                className="navbar-btn"
              />
            </>
          )}
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
        <div className="sm:hidden absolute top-full left-0 right-0 bg-black/70 backdrop-blur-md shadow-lg p-4 z-20 flex flex-col gap-3">
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
                  <Image
                    src={session.user.image}
                    alt="Profile"
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                </NavLink>
                <button
                  type="button"
                  onClick={() => {
                    signOut();
                    setShowMobileMenu(false);
                  }}
                  className="navbar-btn navbar-btn2 rounded-full w-full text-left"
                >
                  Sign Out
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
                setShowDropdown={setShowProviderDropdown}
              />
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
