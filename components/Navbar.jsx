'use client';

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
/* import { createDotsBackground } from "@/utils/backgroundDots"; */

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
      <div className="absolute top-full mt-4 bg-black/50 shadow-md rounded-md p-4 left-0
      lg:m-2">
        {Object.values(providers).map((provider) => (
          <button
            key={provider.name}
            onClick={() => signIn(provider.id)}
            className="block w-full text-left p-2 navbar-btn rounded-full">
            {provider.name}
          </button>
        ))}
      </div>
    )}
  </div>
);

const Navbar = () => {
  const canvasRef = useRef(null);
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [showProviderDropdown, setShowProviderDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isCanvasActive, setIsCanvasActive] = useState(true);
  const canvasController = useRef(null); // Store start/stop controls

  useEffect(() => {
    const fetchProviders = async () => {
      const response = await (await import('next-auth/react')).getProviders();
      setProviders(response);
    };
    fetchProviders();

    /* const setupCanvas = () => {
      const canvas = canvasRef.current;
      const navbar = canvas.parentNode;

      const handleResize = () => {
        canvas.width = navbar.offsetWidth;
        canvas.height = navbar.offsetHeight;
        if (canvasController.current) {
          canvasController.current.stop();
        }
        canvasController.current = createDotsBackground(canvas, canvas.width, canvas.height);
      };

      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    };

    setupCanvas();

    return () => {
      if (canvasController.current) {
        canvasController.current.stop(); // Clean up on unmount
      }
    };*/
  }, []); 

/*   const toggleCanvas = () => {
    if (isCanvasActive) {
      canvasController.current?.stop();
    } else {
      canvasController.current?.start();
    }
    setIsCanvasActive((prev) => !prev);
  }; */

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/create-prompt", label: "AI Prompts" },
    { href: "/docs", label: "Docs" },
    { href: "/gfn", label: "GFN+" },
    { href: "/profile", label: "Profile" }, 
  ];

  return (
    <nav className="relative bg-black p-3">
      {/* <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden="true"
      ></canvas> */}
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
              <Link href="/">
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
          {/* Toggle Canvas Button */}
{/*           <button
            onClick={toggleCanvas}
            className="navbar-btn navbar-btn2 rounded-full">
            {isCanvasActive ? "Canvas-Off" : "Canvas-On"}
          </button> */}
        </div>
        <button
          className="sm:hidden z-10 bg-white"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          aria-label="Toggle mobile menu">
          ☰
        </button>
      </div>

      {showMobileMenu && (
        <div className="sm:hidden absolute top-full left-0 right-0 bg-black/50 backdrop-blur-sm shadow-lg p-4 z-20 flex flex-col gap-3">
          {session?.user ? (
            <>
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  href={link.href}
                  onClick={() => setShowMobileMenu(false)}
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="flex gap-2">
                <Link href="/" className="block my-2">
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
                  onClick={() => {
                    signOut();
                    setShowMobileMenu(false);
                  }}
                  className="navbar-btn navbar-btn2 rounded-full w-full text-left"
                >
                  Sign Out
                </button>
              </div>
              <button
                onClick={toggleCanvas}
                className="navbar-btn navbar-btn2 rounded-full">
                {isCanvasActive ? "Canvas-Off" : "Canvas-On"}
              </button>
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
              <button
                onClick={toggleCanvas}
                className="navbar-btn navbar-btn2 rounded-full">
                {isCanvasActive ? "Canvas-Off" : "Canvas-On"}
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;


