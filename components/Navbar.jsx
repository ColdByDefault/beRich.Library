'use client';

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";



const Navbar = () => {
  const isUserLoggedIn = true;
  return (
    <>
      <nav className="flex justify-evenly w-full p-3 bg-black relative z-10">
        <Link href="/" className="flex gap-2 flex-center">
          <Image 
          src="/assets/images/logo2.png"
          alt="beRichHub Logo"
          width={100}
          height={100} />
          <p className="hidden lg:block font-semibold text-white">.Library</p>
        </Link>
        {/* Mobile device */}
        <div className="sm:flex hidden">
            {isUserLoggedIn ? (
              <div className="flex gap-3 md:gap-5">
                <Link href="/" className="rounded-full border text-white px-2 
                font-semibold
                hover:bg-white hover:text-black">
                  Home
                </Link>
                <Link href="/dashboard" className="rounded-full border text-white px-2 
                font-semibold
                hover:bg-white hover:text-black">
                  Dashboard
                </Link>
                <Link href="/docs" className="rounded-full border text-white px-2 
                font-semibold
                hover:bg-white hover:text-black">
                  Docs
                </Link>
                <Link href="/gfn" className="rounded-full border text-white px-2 
                font-semibold
                hover:bg-white hover:text-black">
                  GFN+
                </Link>
                <Link href="/logout" className="rounded-full border text-white px-2 
                font-semibold
                hover:bg-white hover:text-black">
                  logout
                </Link>
                
              </div>
            ) : (
              <>
                <Link href="/" className="rounded-full border text-white px-2 
                font-semibold
                hover:bg-white hover:text-black">
                  Home
                </Link>
              </>
            )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;

