"use client";
import Link from "next/link";
import Logo from "./Logo";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const handleLogout = async () => {
    await signOut({ redirect: false });
    router.push("/");
  };

  const isAdmin = session?.user?.role === "admin";

  return (
    <nav className="w-full bg-gradient-to-r from-purple-200 via-indigo-200 to-yellow-300 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Logo />

        {/* Mobile right section */}
        <div className="flex items-center gap-3 md:hidden">
          {session?.user && (
            <div className="flex items-center gap-2">
              {session.user.image ? (
                <img src={session.user.image} className="w-9 h-9 rounded-full border" />
              ) : (
                <div className="w-9 h-9 bg-blue-600 text-white rounded-full flex items-center justify-center">
                  {session.user.name?.[0]}
                </div>
              )}
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-800 text-white px-3 py-1 rounded text-sm"
              >
                Logout
              </button>
            </div>
          )}
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-6 font-bold items-center">
          <Link className="hover:text-indigo-600" href="/">Home</Link>
          <Link className="hover:text-indigo-600" href="/services">Services</Link>

          {session?.user && (
            <>
              {!isAdmin && (
                <Link className="hover:text-indigo-600" href="/my-bookings">
                  My Bookings
                </Link>
              )}

              {isAdmin && (
                <Link className="hover:text-indigo-600" href="/admin/dashboard">
                  Dashboard
                </Link>
              )}

              {/* Profile dropdown */}
              <div className="relative">
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="flex items-center gap-2"
                >
                  {session.user.image ? (
                    <img
                      src={session.user.image}
                      className="w-10 h-10 rounded-full border"
                    />
                  ) : (
                    <div className="w-10 h-10 bg-blue-600 rounded-full text-white flex items-center justify-center">
                      {session.user.name?.[0]}
                    </div>
                  )}
                </button>

                {profileOpen && (
                  <div className="absolute right-0 mt-2 bg-pink-300 p-4 rounded shadow w-56">
                    <p className="font-bold">{session.user.name}</p>
                    <p className="text-sm">{session.user.email}</p>
                  </div>
                )}
              </div>

              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-800 text-white px-4 py-1 rounded"
              >
                Logout
              </button>
            </>
          )}

          {!session?.user && (
            <Link
              href="/login"
              className="bg-blue-600 hover:bg-blue-800 text-white px-4 py-1 rounded"
            >
              Login
            </Link>
          )}
        </ul>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div
          className="md:hidden absolute right-3 top-16 bg-gray-300 w-48 rounded-lg shadow-lg p-4 font-semibold z-50 flex flex-col space-y-3"
        >
          <Link
            className="hover:bg-indigo-300 rounded-lg p-2"
            onClick={() => setMobileOpen(false)}
            href="/"
          >
            Home
          </Link>
          <Link
            className="hover:bg-indigo-300 rounded-lg p-2"
            onClick={() => setMobileOpen(false)}
            href="/services"
          >
            Services
          </Link>

          {session?.user && (
            <>
              {!isAdmin && (
                <Link
                  className="hover:bg-indigo-300 rounded-lg p-2"
                  onClick={() => setMobileOpen(false)}
                  href="/my-bookings"
                >
                  My Bookings
                </Link>
              )}

              {isAdmin && (
                <Link
                  className="hover:bg-indigo-300 rounded-lg p-2"
                  onClick={() => setMobileOpen(false)}
                  href="/admin/dashboard"
                >
                  Dashboard
                </Link>
              )}
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;