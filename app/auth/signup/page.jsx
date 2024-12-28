'use client';

import React, { useState } from "react";
import Link from "next/link";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState(null);

  const validateInputs = () => {
    const usernameRegex = /^[a-zA-Z0-9]{3,20}$/;
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,30}$/;

    if (!usernameRegex.test(username)) {
      return "Username must be alphanumeric and 3-20 characters long.";
    }

    if (!passwordRegex.test(password)) {
      return "Password must be 8-30 characters long, include at least one number and one special character.";
    }

    return null; // No errors
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError(null);

    // Validate inputs
    const validationError = validateInputs();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => {
          throw new Error("An unexpected error occurred.");
        });
        throw new Error(errorData.message);
      }

      // Redirect to sign-in page after successful signup
      window.location.href = "/auth/signin";
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-8 shadow-xl rounded-lg w-full max-w-md space-y-8 
      bg-black backdrop-filter backdrop-blur-lg bg-opacity-30 border border-gray-800">
        <div>
          <h1 className="text-3xl font-bold text-center text-white">Create Account</h1>
          <p className="mt-2 text-center text-sm text-gray-400">
            Join our community
          </p>
        </div>
        {error && (
          <div className="text-red-400 text-sm mb-4 bg-red-900 bg-opacity-25 p-3 rounded-md">
            {error}
          </div>
        )}
        <form onSubmit={handleSignUp} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px flex flex-col gap-4">
            <div className="mb-4">
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-600 
                placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 
                focus:border-indigo-500 focus:z-10 sm:text-sm bg-gray-800"
                placeholder="Username"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-600 
                placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 
                focus:border-indigo-500 focus:z-10 sm:text-sm bg-gray-800"
                placeholder="Email address"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="appearance-none rounded-md relative block w-full px-3 
                py-2 border border-gray-600 placeholder-gray-400 text-white 
                focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 
                sm:text-sm bg-gray-800"
                placeholder="Password"
              />
            </div>
            <div className="mb-4  text-white">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                  className="mr-2"
                  required
                />
                I accept the policy
              </label>
            </div>
          </div>
          <div>
            <button
              type="submit"
              disabled={!isChecked}
              className={`group relative w-full flex justify-center py-2 px-4 border 
              border-transparent text-sm font-medium rounded-md text-white 
              ${
                isChecked
                  ? "bg-indigo-600 hover:bg-indigo-700"
                  : "bg-gray-600 cursor-not-allowed"
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200`}
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="text-sm text-center text-gray-400">
          Already have an account?{" "}
          <Link href="/auth/signin" className="font-medium text-indigo-400 
          hover:text-indigo-300 transition-colors duration-200">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
