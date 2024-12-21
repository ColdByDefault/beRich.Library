'use client';

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { createDotsBackground } from "@utils/backgroundDots";



const Navbar = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
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
      <nav className="flex justify-evenly w-full p-3 bg-black relative z-10">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
        ></canvas>
        <Link href="/" className="flex gap-2 flex-center z-10">
          <Image
            src="/assets/images/logo2.png"
            alt="beRichHub Logo"
            width={100}
            height={100}
          />
          <p className="hidden lg:block font-semibold text-white">.Library</p>
        </Link>
        <div className="sm:flex hidden z-10">
          <div className="flex gap-3 md:gap-5">
            <Link href="/" className="rounded-full border text-white px-2 font-semibold hover:bg-white hover:text-black">
              Home
            </Link>
            <Link href="/dashboard" className="rounded-full border text-white px-2 font-semibold hover:bg-white hover:text-black">
              Dashboard
            </Link>
            <Link href="/docs" className="rounded-full border text-white px-2 font-semibold hover:bg-white hover:text-black">
              Docs
            </Link>
            <Link href="/gfn" className="rounded-full border text-white px-2 font-semibold hover:bg-white hover:text-black">
              GFN+
            </Link>
            <Link href="/logout" className="rounded-full border text-white px-2 font-semibold hover:bg-white hover:text-black">
              Logout
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

