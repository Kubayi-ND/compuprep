import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="fixed left-1/2 -translate-x-1/2 w-[80%] bg-gray-600/70 backdrop-blur-sm shadow-md z-50 mt-8 rounded-full">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <span className="ml-2 text-xl font-bold text-white">CompuPrep</span>
            </Link>
          </div>
          <div className="flex-1 flex justify-center">
            <nav className="hidden md:flex items-center md:space-x-8 ">
              <Link
                href="/"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-indigo-500 text-lg font-medium text-white"
              >
                Home
              </Link>
              <Link
                href="/tests"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-lg font-medium text-gray-300 hover:text-white hover:border-gray-300"
              >
                Practice Tests
              </Link>
              <Link
                href="/dashboard"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-lg font-medium text-gray-300 hover:text-white hover:border-gray-300"
              >
                Dashboard
              </Link>
            </nav>
          </div>
          <div className="flex items-center">
            <button className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-lg font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Login
            </button>
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
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
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
