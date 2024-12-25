import { getSession, signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect } from "react";

const Navbar = () => {
  const { data: session, status } = useSession();

  //   useEffect(() => {
  //     const session = getSession(context);

  //     console.log("session", session);
  //   }, []);
  const handleSignIn = () => {
    signIn();
  };

  const handleSignOut = () => {
    signOut();
  };
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800">
          <Link className="hover:text-blue-600" href="/">
            MyBrand
          </Link>
        </div>

        {/* Links */}
        <div className="hidden md:flex space-x-6">
          <Link
            className="text-gray-600 hover:text-blue-600 font-medium"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-gray-600 hover:text-blue-600 font-medium"
            href="/products"
          >
            Products
          </Link>
          <Link
            className="text-gray-600 hover:text-blue-600 font-medium"
            href="/about"
          >
            About Us
          </Link>
          <Link
            className="text-gray-600 hover:text-blue-600 font-medium"
            href="/profile"
          >
            Profile
          </Link>
          <Link
            className="text-gray-600 hover:text-blue-600 font-medium"
            href="/blogs"
          >
            Blogs
          </Link>
        </div>

        {/* Buttons */}
        {status === "authenticated" ? (
          <button
            onClick={handleSignOut}
            className="px-4 py-2 border border-red-400 text-red-400 rounded-md hover:bg-blue-50 transition"
          >
            Sign Out
          </button>
        ) : (
          <div className="flex space-x-4">
            <button
              onClick={handleSignIn}
              className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition"
            >
              Sign In
            </button>
            <button
              onClick={handleSignIn}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Sign Up
            </button>
          </div>
        )}

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
