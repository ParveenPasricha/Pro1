import React, { useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { Bars } from 'react-loading-icons';
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

const OnlineTest = () => {
  const [course, setCourse] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/posts");
        const data = await response.json();
        setCourse(data.posts);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="bg-black flex justify-center items-center h-screen">
        <Bars className="text-white" />
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row h-screen mt-28">
      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-3 text-white bg-black w-full flex justify-between items-center"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <h2 className="text-xl font-bold">TestBook</h2>
        <FiMenu size={24} />
      </button>

      {/* Sidebar */}
      <div
        className={`absolute md:relative bg-black text-white p-5 min-h-full w-3/4 md:w-1/5 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <h2 className="text-2xl font-bold mb-4">TestBook</h2>
        <ul className="space-y-3">
          <li className="hover:text-blue-400 cursor-pointer">
            <Link className="text-white" to="/">Home</Link>
          </li>
          <li className="hover:text-blue-400 cursor-pointer">Test Series</li>
          <li className="hover:text-blue-400 cursor-pointer">Live Tests & Quizzes</li>
          <li className="hover:text-blue-400 cursor-pointer">Previous Year Papers</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-full md:w-4/5 p-6">
        <div className="flex items-center bg-gray-200 p-2 rounded-md mb-6">
          <IoSearchSharp className="text-gray-500 mx-2" />
          <input
            type="text"
            placeholder="Search for your Exam"
            className="w-full bg-transparent focus:outline-none"
          />
        </div>

        <h1 className="text-2xl font-bold mb-4">Popular Test Series</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {course.length > 0 ? (
            course.map((test) => (
              <div
                key={test.id}
                className="p-4 bg-purple-100 rounded-lg shadow-md"
              >
                <h2 className="text-lg font-semibold">{test.title}</h2>
                <p>{test.body}</p>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default OnlineTest;
