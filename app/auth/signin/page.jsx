'use client';

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailSignIn = async (e) => {
    e.preventDefault();
    try {
      // Sign in with credentials provider (email/password)
      await signIn("credentials", {
        email,
        password,
        callbackUrl: "/",
      });
    } catch (error) {
      console.error("Error signing in", error);
    }
  };

  const providersIcons = {
    google: <FcGoogle className="w-5 h-5" />,
    github: <FaGithub className="w-5 h-5" />,
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-8 shadow-xl rounded-lg w-full max-w-md space-y-8 
      bg-black backdrop-filter backdrop-blur-lg bg-opacity-30 border border-gray-800">
        <div>
          <h1 className="text-3xl font-bold text-center text-white">Sign In</h1>
          <p className="mt-2 text-center text-sm text-gray-400">
            Access your account
          </p>
        </div>
        <form onSubmit={handleEmailSignIn} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="mb-4">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-gray-800"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-gray-800"
                placeholder="Password"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
            >
              Sign In
            </button>
          </div>
        </form>
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-900 text-gray-400">
                Or continue with
              </span>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {Object.keys(providersIcons).map((provider) => (
              <button
                key={provider}
                onClick={() => signIn(provider, { callbackUrl: "/" })}
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-600 rounded-md shadow-sm bg-gray-800 text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
              >
                {providersIcons[provider]}
                <span className="ml-2 capitalize">{provider}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="text-sm text-center text-gray-400">
          Don't have an account?{" "}
          <Link href="/auth/signup" className="font-medium text-indigo-400 hover:text-indigo-300 transition-colors duration-200">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

