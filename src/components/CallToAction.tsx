import Link from "next/link";

const CallToAction = () => {
  return (
    <div className="bg-indigo-700">
      <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">Ready to improve your computer literacy?</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-indigo-100">
          Join thousands of tertiary students who are mastering Microsoft Office and improving their grades with our platform.
        </p>
        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-md shadow">
            <Link
              href="/tests"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50"
            >
              Start Practicing Now
            </Link>
          </div>
          <div className="ml-3 inline-flex">
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
