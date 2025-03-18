import React, { useState } from "react";
import { motion } from "framer-motion";

const Admin = () => {
  const [formData, setFormData] = useState({
    title: "",
    totalTests: "",
    freeTests: "",
    languages: "",
    courseDetails: "",
    users: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.title ||
      !formData.totalTests ||
      !formData.freeTests ||
      !formData.languages ||
      !formData.courseDetails ||
      !formData.users
    ) {
      alert("Please fill out all fields before submitting!");
      return;
    }
    console.log("Form Submitted:", formData);
    alert("Data Submitted Successfully! 🚀");
    setFormData({
        title: "",
        totalTests: "",
        freeTests: "",
        languages: "",
        courseDetails: "",
        users: "",
      });
  };

  return (
    <div className="min-h-screen flex mt-28 items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white px-4">
      {/* Glassmorphic Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl p-8"
      >
        {/* Title with Neon Effect */}
        <h1 className="text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-400 drop-shadow-md">
          ⚡ Admin Dashboard ⚡
        </h1>

        {/* Admin Form */}
        <form className="grid grid-cols-2 gap-6 mt-8" onSubmit={handleSubmit}>
          {/* Input Fields */}
          {[
            { label: "Enter Title", name: "title" },
            { label: "Total Tests", name: "totalTests" },
            { label: "Free Tests", name: "freeTests" },
            { label: "Languages", name: "languages" },
          ].map((field, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <label className="block text-sm text-gray-300">
                {field.label}
              </label>
              <input
                type="text"
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </motion.div>
          ))}

          {/* Course Details */}
          <motion.div
            className="col-span-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <label className="block text-sm text-gray-300">
              Course Details
            </label>
            <textarea
              name="courseDetails"
              value={formData.courseDetails}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none h-24"
            />
          </motion.div>

          {/* Users */}
          <motion.div
            className="col-span-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <label className="block text-sm text-gray-300">Users</label>
            <input
              type="text"
              name="users"
              value={formData.users}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </motion.div>

          {/* Submit Button with Glow Effect */}
          <motion.div
            className="col-span-2 flex justify-center"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-pink-500 px-6 py-3 text-white font-bold rounded-xl shadow-lg transition duration-300 hover:shadow-blue-500/50"
            >
              🚀 Submit
            </button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
};

export default Admin;
