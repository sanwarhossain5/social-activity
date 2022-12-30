import React from "react";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div>
      <section className="flex items-center h-screen p-16 dark:bg-gray-900 dark:text-gray-100">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className=" text-center">
            <p className="md:text-8xl text-[#DF0303] font-semibold text-3xl">
              404 ERROR!
            </p>
            <p className="mt-4 max-w-lg mb-8 text-[#252525]">
              Look like something went wrong! The page you were looking for is
              not here. Go Home or try a search.
            </p>
            <Link
              to="/"
              rel="noopener noreferrer"
              href="#"
              style={{background:'#D53F8C'}}
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;
