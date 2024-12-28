import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { SiLinktree } from "react-icons/si";
import { SiWakatime } from "react-icons/si";

function Footer() {
    return (
    <footer className="bg-black backdrop-filter backdrop-blur-lg bg-opacity-30 border-t border-gray-900
    shadow-lg">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div className="md:flex md:justify-between">
              <div className="mb-6 md:mb-0">
                <Image src="/assets/images/logo.png" 
                width={80}
                height={80}
                alt="beRichHub"
                className="me-3"/>
              </div>
              <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                  <div>
                      <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                      <ul className="text-gray-500 dark:text-gray-400 font-medium">
                          <li className="mb-4">
                              <Link href="https://nextjs.org/" rel="noopener noreferrer" target="_blank"
                              className="hover:underline">NEXT.JS</Link>
                          </li>
                          <li>
                              <Link href="https://tailwindcss.com/" rel="noopener noreferrer" target="_blank"
                              className="hover:underline">Tailwind CSS</Link>
                          </li>
                      </ul>
                  </div>
                  <div>
                      <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                      <ul className="text-gray-500 dark:text-gray-400 font-medium">
                          <li className="mb-4">
                              <Link href="https://github.com/ColdByDefault" rel="noopener noreferrer" target="_blank"
                              className="hover:underline ">Github</Link>
                          </li>
                          <li>
                              <Link href="https://linktr.ee/ColdByDefault" rel="noopener noreferrer" target="_blank"
                              className="hover:underline">Linktree</Link>
                          </li>
                      </ul>
                  </div>
                  <div>
                      <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                      <ul className="text-gray-500 dark:text-gray-400 font-medium">
                          <li className="mb-4">
                              <Link href="/privacy-policy" rel="noopener noreferrer" target="_blank"
                              className="hover:underline">Privacy Policy</Link>
                          </li>
                          <li>
                              <Link href="https://www.coldbydefault.com" rel="noopener noreferrer" target="_blank"
                              className="hover:underline">Credits &amp; Development</Link>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
              <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">{new Date().getFullYear()}{" "}
              <Link href="https://coldbydefault.com/" rel="noopener noreferrer" target="_blank"
              className="hover:underline">AnotherProject™</Link>. All Rights Reserved.
              </span>
              <div className="flex gap-2 mt-4 sm:justify-center sm:mt-0">
                  <Link href="https://www.instagram.com/cold.by.default/" rel="noopener noreferrer" target="_blank"
                  className="text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                      <FaInstagram className="w-6 h-6" />
                  </Link>
                  <Link href="https://twitter.com/ColdByDefault" rel="noopener noreferrer" target="_blank"
                  className="text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                      <BsTwitterX className="w-6 h-6" />
                  </Link>
                  <Link href="https://linktr.ee/ColdByDefault" rel="noopener noreferrer" target="_blank"
                  className="text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                      <SiLinktree className="w-6 h-6" />
                  </Link>
                  <Link href="https://wakatime.com/@ColdByDefault" rel="noopener noreferrer" target="_blank" 
                  className="text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                      <SiWakatime className="w-6 h-6" />
                  </Link>
              </div>
          </div>
        </div>
    </footer>
    );
}
  
export default Footer;
  
  
  