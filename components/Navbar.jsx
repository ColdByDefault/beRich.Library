'use client';

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, getProviders, useSession } from "next-auth/react";
import { createDotsBackground } from "@utils/backgroundDots";

const Navbar = () => {
  const canvasRef = useRef(null);
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [showProviderDropdown, setShowProviderDropdown] = useState(false);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    // Fetch sign-in providers
    const fetchProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    fetchProviders();

    // Background Canvas
    const canvas = canvasRef.current;
    const navbar = canvas.parentNode;
    canvas.width = navbar.offsetWidth;
    canvas.height = navbar.offsetHeight;
    createDotsBackground(canvas, canvas.width, canvas.height);
    const handleResize = () => {
      canvas.width = navbar.offsetWidth;
      canvas.height = navbar.offsetHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav className="flex sm:flex-row justify-between sm:justify-evenly w-full p-3 bg-black relative z-10">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
        ></canvas>
        <Link
          href="/"
          className="flex gap-2 flex-center z-10 justify-center items-center ml-8"
        >
          <Image
            src="/assets/images/logo.png"
            alt="beRichHub Logo"
            width={100}
            height={100}
          />
          <p className="hidden lg:block text-white text-[10px]">.Library V.3.2.1</p>
        </Link>
        <div className="sm:flex hidden z-10">
          <div className="flex gap-3 md:gap-5 justify-center items-center">
            {session?.user ? (
              <>
                <Link href="/" className="navbar-btn rounded-full">Startseite</Link>
                <Link href="/create-prompt" className="navbar-btn rounded-full">AI Prompts</Link>
                <Link href="/docs" className="navbar-btn rounded-full">Docs</Link>
                <Link href="/gfn" className="navbar-btn rounded-full">GFN+</Link>
                <Link href="/">
                  <Image
                    src={session?.user.image}
                    alt="profile"
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                </Link>
                <button type="button"
                  onClick={signOut}
                  className="navbar-btn navbar-btn2 rounded-full">
                  Abmelden
                </button>
              </>
            ) : (
              <>
                <Link href="/" className="navbar-btn rounded-full">Home</Link>
                <button
                  type="button"
                  className="navbar-btn rounded-full"
                  onClick={() => setShowProviderDropdown(!showProviderDropdown)}
                >
                  Sign In
                </button>
                {showProviderDropdown && providers && (
                  <div className="absolute top-14 bg-white shadow-md rounded-md p-4">
                    {Object.values(providers).map((provider) => (
                      <button
                        key={provider.name}
                        onClick={() => signIn(provider.id)}
                        className="block w-full text-left p-2 hover:bg-gray-200 rounded-md">
                        {provider.name}
                      </button>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
        {/* Mobile Device */}
        <div className="sm:hidden flex">
          {session?.user ? (
            <div className="flex">
              <Image
                src={session?.user.image}
                alt="profile"
                width={30}
                height={30}
                onClick={() => setToggleDropdown((prev) => !prev)}
                className="rounded-full"
              />
              {toggleDropdown && (
                <div
                  className="absolute right-0 top-full flex flex-col 
              justify-center items-center gap-2 w-full 
            bg-black/50 backdrop-blur-sm shadow-lg p-4">
                  <Link href="/"
                    className="navbar-btn rounded-full"
                    onClick={() => setToggleDropdown(false)}>
                    Startseite
                  </Link>
                  <Link
                    href="/create-prompt"
                    className="navbar-btn text-white rounded-full"
                    onClick={() => setToggleDropdown(false)}>
                    AI Prompts
                  </Link>
                  <Link href="/docs"
                    className="navbar-btn text-white rounded-full"
                    onClick={() => setToggleDropdown(false)}>
                    Docs
                  </Link>
                  <Link href="/gfn"
                    className="navbar-btn text-white rounded-full"
                    onClick={() => setToggleDropdown(false)}>
                    GFN+
                  </Link>
                  <Link href="/"
                    className="navbar-btn text-white rounded-full"
                    onClick={() => setToggleDropdown(false)} >
                    Profile
                  </Link>
                  <button className="navbar-btn navbar-btn2 rounded-full text-left"
                    type="button"
                    onClick={() => {
                      signOut();
                      setToggleDropdown(false);
                    }} >
                    Abmelden
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link href="/"
                className="navbar-btn rounded-full"
                onClick={() => setToggleDropdown(false)}>
                Home
              </Link>
              <button type="button"
                className="navbar-btn rounded-full"
                onClick={() => setShowProviderDropdown(!showProviderDropdown)}>
                Sign In
              </button>
              {showProviderDropdown && providers && (
                <div className="absolute bg-white shadow-md rounded-md p-4">
                  {Object.values(providers).map((provider) => (
                    <button
                      key={provider.name}
                      onClick={() => signIn(provider.id)}
                      className="block w-full text-left p-2 hover:bg-gray-200 rounded-md" >
                      {provider.name}
                    </button>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
