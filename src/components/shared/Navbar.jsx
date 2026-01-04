"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Care<span className="text-green-500">.xyz</span>
        </Link>

        {/* Menu */}
        <ul className="flex gap-6 text-gray-700 font-medium">
          <li>
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-blue-600">
              Services
            </Link>
          </li>
          <li>
            <Link href="/my-bookings" className="hover:text-blue-600">
              My Bookings
            </Link>
          </li>
          <li>
            <Link
              href="/login"
              className="bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700"
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
