"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen from-blue-50 to-white">
      <div className="text-center bg-white p-10 w-full min-h-screen flex justify-center items-center flex-col ">
        {/* 404 Number */}
        <div className="">
          <h1 className="text-7xl font-extrabold text-primary">404</h1>

          {/* Title */}
          <h2 className="text-2xl font-bold text-gray-700 mt-4">
            Page Not Found
          </h2>

          {/* Description */}
          <p className="text-gray-400 mt-2">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>

          {/* Button */}
          <Link href="/">
            <button className="btn btn-primary mt-6 px-6 rounded-xl">
              Back to Home
            </button>
          </Link>

          <div className="mt-6">
            <span className="loading loading-dots loading-md text-primary"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
