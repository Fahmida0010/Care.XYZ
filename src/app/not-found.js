import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <h1 className="text-4xl text-red-500
       font-bold text-red-600 mb-4">404
        <br/> 
     <span className='text-red-800'>Page Not Found</span>
        </h1>
      <p className="text-lg text-gray-800
       mb-8">Sorry, the page you're looking for doesn't exist.</p>
      
      <Link href="/">  
        <button className="px-6 py-3 bg-green-700 text-white font-bold rounded hover:bg-green-500 transition">
          Return to Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;