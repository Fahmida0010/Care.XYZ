"use client";

import Link from "next/link";

export default function cancel() {
  return (
    <div className="min-h-screen flex items-center
     justify-center  bg-red-50 px-4">
      <div className="max-w-md w-full  rounded-2xl 
      shadow-lg p-8 text-center">
        <div className="text-red-500 text-6xl mb-4">❌</div>

        <h1 className="text-2xl font-bold text-red-600 mb-2">
          Payment Failed
        </h1>

        <p className="text-gray-800 mb-6">
          Unfortunately, your payment could not be completed.
          Please try again or contact support if the issue persists.
        </p>

        <div className="flex flex-col gap-3">
          <Link
            href="/"
            className="border border-green-500
             hover:bg-green-500  py-2
              rounded-xl transition"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
