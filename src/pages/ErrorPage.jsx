import React from "react";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="md:w-1/2 h-min py-6 text-center text-white bg-red-600">
        <h1 className="font-bold mb-8">404! page not found!</h1>
        <Link
          to="/"
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
          go to home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
