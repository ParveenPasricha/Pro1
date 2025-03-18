import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUserShield } from "react-icons/fa";

const AdminLoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data: ", formData);
    alert("Admin Login Successful! ✅");
  };

  return (
    <div className="h-screen flex mt-28 items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white px-4">
      {/* Glassmorphic Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-2xl p-8"
      >
        {/* Logo & Heading */}
        <div className="text-center">
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block p-4 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full"
          >
            <FaUserShield className="text-4xl text-white" />
          </motion.div>
          <h1 className="text-3xl font-bold mt-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-400">
            Admin Login
          </h1>
        </div>

        {/* Login Form */}
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          {/* Email Input */}
          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
            <label className="block text-sm text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter Admin Email"
            />
          </motion.div>

          {/* Password Input */}
          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
            <label className="block text-sm text-gray-300">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter Password"
            />
          </motion.div>

          {/* Submit Button */}
          <motion.div className="text-center mt-6" whileHover={{ scale: 1.1 }}>
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-pink-500 px-6 py-3 text-white font-bold rounded-xl shadow-lg transition duration-300 hover:shadow-blue-500/50"
            >
              🚀 Login
            </button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
};

export default AdminLoginPage;
