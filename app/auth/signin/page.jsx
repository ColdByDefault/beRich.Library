'use client';
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { FaGithub, FaBrain, FaSignOutAlt  } from "react-icons/fa";
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
    google: <FcGoogle />,
    github: <FaGithub />,
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign In</h1>

        <form onSubmit={handleEmailSignIn} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Sign In
          </button>
        </form>

        <div className="flex items-center justify-between mt-6">
          <hr className="w-1/4 border-gray-300" />
          <span className="text-sm text-gray-500">Or sign in with</span>
          <hr className="w-1/4 border-gray-300" />
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3">
            {Object.keys(providersIcons).map((provider) => (
              <button
                key={provider}
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm 
                bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                {providersIcons[provider]}
                <span className="ml-2 capitalize">{provider}</span>
              </button>
            ))}
        </div>
        <div className="text-sm text-center text-gray-500 mt-6">
          Don't have an account?{" "}
          <Link href="/auth/signup">
            <div className="text-blue-500 hover:underline">Sign up</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
