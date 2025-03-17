import React, { useState, useEffect } from "react";
import { FaSearch, FaBars } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./Redux/authSlice"; // Path confirm karo!

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const user = useSelector((state) => state.auth.user);
  console.log("Redux user:", user);

  useEffect(() => {
    setCurrentUser(user);
  }, [user]); // Redux state update hone par re-render hoga

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login"); // Logout hone ke baad redirect
  };

  return (
    <div className="flex items-center justify-between px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg fixed top-0 w-full z-10 text-white">
      <div className="w-20">
        <img
          onClick={() => navigate("/")}
          src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg"
          alt="Logo"
          className="w-full h-auto rounded-full shadow-md border-2 border-white cursor-pointer"
        />
      </div>

      <div className="hidden md:flex space-x-6 items-center">
        <select className="text-gray-800 p-2 rounded-md border-none outline-none cursor-pointer shadow-md">
          <option>Exams</option>
          <option>SSC</option>
          <option>Railway</option>
          <option>Banking</option>
        </select>
        {["SuperCoaching", "Test Series", "Skill Academy", "Pass", "More"].map((item) => (
          <button key={item} className="hover:text-yellow-300 transition-all">
            {item}
          </button>
        ))}
      </div>

      <div className="relative w-64 hidden md:block">
        <input
          type="text"
          className="w-full border-none rounded-full pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-300 shadow-lg text-gray-800 hover:bg-white"
          placeholder="Search..."
        />
        <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer hover:text-blue-700" />
      </div>

      {currentUser ? (
        <div className="flex items-center space-x-4">
          <h1 className="font-bold text-white">Welcome, {currentUser.user}</h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 px-3 py-1 rounded text-white hover:bg-red-700 transition-all"
          >
            Logout
          </button>
        </div>
      ) : (
        <Link
          to="/login"
          className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-2 rounded-full transition-all shadow-lg"
        >
          Get Started
        </Link>
      )}

      <div className="md:hidden relative">
        <FaBars
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white text-2xl cursor-pointer"
        />

        {menuOpen && (
          <div className="absolute right-0 mt-3 bg-white shadow-lg rounded-lg p-2 w-40">
            {["SuperCoaching", "Test Series", "Skill Academy", "Pass", "More"].map((item) => (
              <button
                key={item}
                onClick={() => setMenuOpen(false)}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
