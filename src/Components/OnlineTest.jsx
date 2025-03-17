import React from "react";
import { IoSearchSharp } from "react-icons/io5";

const testSeriesData = [
  {
    id: 1,
    title: "RRB NTPC (CBT 1 + CBT 2) 2024 Mock Test Series",
    totalTests: 1281,
    freeTests: 8,
    users: "1776.3k Users",
  },
  {
    id: 2,
    title: "RRB Group D Mock Test Series 2024-25",
    totalTests: 932,
    freeTests: 4,
    users: "1285.3k Users",
  },
  {
    id: 3,
    title: "SSC CGL (Tier I & Tier II) Mock Test 2025",
    totalTests: 768,
    freeTests: 2,
    users: "357.4k Users",
  },
];

const OnlineTest = () => {
  return (
    <div className="flex h-screen mt-28">
      {/* Sidebar */}
      <div className="w-1/5 bg-black text-white p-5 min-h-full">
        <h2 className="text-2xl font-bold mb-4">testbook</h2>
        <ul className="space-y-3">
          <li className="hover:text-blue-400 cursor-pointer">Home</li>
          <li className="hover:text-blue-400 cursor-pointer">Test Series</li>
          <li className="hover:text-blue-400 cursor-pointer">Live Tests & Quizzes</li>
          <li className="hover:text-blue-400 cursor-pointer">Previous Year Papers</li>
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
          {testSeriesData.map((test) => (
            <div key={test.id} className="p-4 bg-purple-100 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold">{test.title}</h2>
              <p>{test.totalTests} Total Tests | {test.freeTests} Free Tests</p>
              <p className="text-gray-500 text-sm">{test.users}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OnlineTest;
