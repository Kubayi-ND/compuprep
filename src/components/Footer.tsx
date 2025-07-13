import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-6 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
          <div className="px-5 py-2">
            <Link
              href="/"
              className="text-lg text-gray-500 hover:text-gray-900"
            >
              Home
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link
              href="/tests"
              className="text-lg text-gray-500 hover:text-gray-900"
            >
              Practice Tests
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link
              href="/dashboard"
              className="text-lg text-gray-500 hover:text-gray-900"
            >
              Dashboard
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link
              href="/about"
              className="text-lg text-gray-500 hover:text-gray-900"
            >
              About
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link
              href="/help"
              className="text-lg text-gray-500 hover:text-gray-900"
            >
              Help
            </Link>
          </div>
        </nav>
        <p className="mt-8 text-center text-base text-gray-500">
          &copy; {new Date().getFullYear()} CompuPrep. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
