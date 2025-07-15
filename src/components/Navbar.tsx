"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <header className="fixed left-1/2 -translate-x-1/2 w-[80%] bg-gray-600/70 backdrop-blur-sm shadow-md z-50 mt-8 rounded-full">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <span className="ml-2 text-2xl font-bold text-white">CompuPrep</span>
            </Link>
          </div>
          <div className="flex-1 flex justify-center">
            <nav className="hidden md:flex items-center md:space-x-8">
              <Link
                href="/"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-xl ${
                  pathname === "/" 
                    ? "border-indigo-500 text-white font-bold" 
                    : "border-transparent text-gray-300 hover:text-white hover:border-gray-300 font-medium"
                } text-lg transition-colors duration-200`}
              >
                Home
              </Link>
              <Link
                href="/tests"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-xl ${
                  pathname.startsWith("/tests") 
                    ? "border-indigo-500 text-white font-bold" 
                    : "border-transparent text-gray-300 hover:text-white hover:border-gray-300 font-medium"
                } text-lg transition-colors duration-200`}
              >
                Practice Tests
              </Link>
              <Link
                href="/dashboard"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-xl ${
                  pathname === "/dashboard" 
                    ? "border-indigo-500 text-white font-bold" 
                    : "border-transparent text-gray-300 hover:text-white hover:border-gray-300 font-medium"
                } text-lg transition-colors duration-200`}
              >
                Dashboard
              </Link>
            </nav>
          </div>
          <div className="hidden md:flex items-center">
            <button className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-lg font-bold  text-gray-300 ">
              Sign up
            </button>
             <button className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-lg font-bold rounded-full shadow-sm text-gray-200 bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Sign in
            </button>
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">{mobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
              {mobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        
     
        
        {/* Floating mobile menu */}
        <div 
          className={`fixed top-24 right-4 left-4 md:hidden z-50 transform transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-[-20px] opacity-0 pointer-events-none'
          }`}
        >
          <div className="pt-2 pb-3 space-y-1 bg-gray-700 rounded-xl shadow-2xl border border-gray-600">
            <div className="flex justify-between items-center px-4 py-2 border-b border-gray-600">
              <span className="text-white font-bold">Menu</span>
              
            </div>
            <Link
              href="/"
              className={`block pl-3 pr-4 py-2 border-l-4 mx-2 rounded-lg ${
                pathname === "/"
                  ? "border-indigo-500 text-white font-bold bg-gray-800"
                  : "border-transparent text-gray-300 hover:text-white hover:bg-gray-600 font-medium"
              } text-base transition-colors duration-200`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/tests"
              className={`block pl-3 pr-4 py-2 border-l-4 mx-2 rounded-lg ${
                pathname.startsWith("/tests")
                  ? "border-indigo-500 text-white font-bold bg-gray-800"
                  : "border-transparent text-gray-300 hover:text-white hover:bg-gray-600 font-medium"
              } text-base transition-colors duration-200`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Practice Tests
            </Link>
            <Link
              href="/dashboard"
              className={`block pl-3 pr-4 py-2 border-l-4 mx-2 rounded-lg ${
                pathname === "/dashboard"
                  ? "border-indigo-500 text-white font-bold bg-gray-800"
                  : "border-transparent text-gray-300 hover:text-white hover:bg-gray-600 font-medium"
              } text-base transition-colors duration-200`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Dashboard
            </Link>
            <div className="pt-4 pb-2 border-t border-gray-600">
              <div className="flex items-center justify-center space-x-3">
                <Link
                  href="/signup"
                  className="block px-4 py-2 text-center text-white font-bold hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign up
                </Link>
                <Link
                  href="/signin"
                  className="block px-4 py-2 text-center text-white font-bold bg-indigo-600 rounded-full hover:bg-indigo-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
