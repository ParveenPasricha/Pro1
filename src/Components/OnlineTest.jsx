import React, { useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { Bars } from 'react-loading-icons';
import { Link } from "react-router-dom";

const OnlineTest = () => {
  const [course, setCourse] = useState([]);
  const [loading, setLoading] = useState(true);

  // const testSeriesData = [
  //   {
  //     id: 1,
  //     title: "RRB NTPC (CBT 1 + CBT 2) 2024 Mock Test Series",
  //     totalTests: 1281,
  //     freeTests: 8,
  //     users: "1776.3k Users",
  //   },
  //   {
  //     id: 2,
  //     title: "RRB Group D Mock Test Series 2024-25",
  //     totalTests: 932,
  //     freeTests: 4,
  //     users: "1285.3k Users",
  //   },
  //   {
  //     id: 3,
  //     title: "SSC CGL (Tier I & Tier II) Mock Test 2025",
  //     totalTests: 768,
  //     freeTests: 2,
  //     users: "357.4k Users",
  //   },
  // ];

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
      <div className="bg-black z-10 mt-28">
        <h1 className="text-4xl h-screen font-bold text-center">
          <Bars />
        </h1>
      </div>
    );
  }

  return (
    <div className="flex h-screen mt-28">
      {/* Sidebar */}
      <div className="w-1/5 bg-black text-white p-5 min-h-full">
        <h2 className="text-2xl font-bold mb-4">TestBook</h2>
        <ul className="space-y-3">
          <li className="hover:text-blue-400 cursor-pointer">
            <Link className="text-white" to='/'>Home</Link></li>
          <li className="hover:text-blue-400 cursor-pointer">Test Series</li>
          <li className="hover:text-blue-400 cursor-pointer">
            Live Tests & Quizzes
          </li>
          <li className="hover:text-blue-400 cursor-pointer">
            Previous Year Papers
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-4/5 p-6">
        <div className="flex items-center bg-gray-200 p-2 rounded-md mb-6">
          <IoSearchSharp className="text-gray-500 mx-2" />
          <input
            type="text"
            placeholder="Search for your Exam"
            className="w-full bg-transparent focus:outline-none"
          />
        </div>

        <h1 className="text-2xl font-bold mb-4">Popular Test Series</h1>
        <div className="grid grid-cols-3 gap-6">
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
