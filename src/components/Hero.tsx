import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-white pt-16">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48">
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
            <div>
              <div>
                <div className="mt-6 sm:max-w-xl">
                  <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl text-center">
                    Tertiary Computer Literacy Practice Platform
                  </h1>
                  <p className="mt-6 text-xl text-gray-500">
                    Practice Microsoft Office skills with our automated grading platform designed specifically for tertiary students.
                  </p>
                </div>
                <div className="mt-10 sm:flex sm:gap-4">
                  <div className="rounded-md shadow">
                    <Link
                      href="/tests"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                    >
                      Start Practicing
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0">
                    <Link
                      href="/about"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="sm:mx-auto  sm:px-6">
            <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <div className="relative pl-4 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full ">
                <Image
                  className="w-[90%] mx-auto rounded-2xl md:rounded-full shadow-xl lg:h-full lg:w-auto lg:max-w-none "
                  src="/hero-image.jpeg"
                  alt="Computer Literacy"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
