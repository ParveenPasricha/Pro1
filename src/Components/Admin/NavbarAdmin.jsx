import React from "react";
import { Link } from "react-router-dom";

const NavbarAdmin = () => {
  return (
    <nav className="fixed mt-28 top-0 left-0 w-full bg-gradient-to-r from-blue-900 to-yellow-600 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <h1 className="text-white text-2xl font-bold tracking-wide">
          🚀 Admin Panel
        </h1>

        {/* Navigation Links */}
        <div className="flex space-x-6">
        <Link
            to="/admin"
            className="text-white font-medium text-lg transition duration-300 hover:text-yellow-300"
          >
             Home
          </Link>
          <Link
            to="/admin/addpost"
            className="text-white font-medium text-lg transition duration-300 hover:text-yellow-300"
          >
            ➕ Add Post
          </Link>
          <Link
            to="/admin/deletepost"
            className="text-white font-medium text-lg transition duration-300 hover:text-yellow-300"
          >
            ❌ Delete Post
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarAdmin;
