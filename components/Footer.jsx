// Desc: Footer component for the website
import React from "react";
import Link from "next/link";


function Footer() {
    return (
      <footer className="fixed bottom-0 w-full bg-black
         text-white">
        <div className="container mx-auto flex 
        sm:flex-row items-center justify-between px-4">
          <div className="text-center sm:text-left text-[.6rem] md:text-[1rem]">
            <p>
              Copyright © {new Date().getFullYear()}{" "}
              <span className="font-semibold">ColdByDefault</span>. All rights reserved.{" "}
              <span className="text-orange-500">Another</span>Project&trade;
            </p>
          </div>
          <Link
            href="/privacy-policy"
            className="text-[.6rem] md:text-[1rem] underline hover:text-blue-500"
          >
            Privacy Policy
          </Link>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  
  
  