import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col mt-32 md:flex-row items-center justify-between px-6 md:px-20 py-10 bg-gradient-to-b from-white to-blue-100">
      <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold">
          <span className="bg-blue-600 text-white px-2 py-1 rounded">One Destination for</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Complete Exam Preparation</h2>
        <p className="text-gray-600 text-lg">Learn ► Practice ► Improve ► Succeed</p>
        <p className="text-gray-500">Start your preparation for selections. For Free!</p>

        <div className="flex flex-col md:flex-row items-center md:space-x-4 space-y-4 md:space-y-0">
          <Link className="bg-green-600 text-white px-4 py-2 rounded" to={"/login"}>
            Get Started for Free
          </Link>
          <img
            className="w-32 md:w-36"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1280px-Google_Play_Store_badge_EN.svg.png"
            alt="Google Play"
          />
        </div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
        <img
          className="w-64 md:w-[500px]"
          src="https://testbook.com/assets/img/index/home-banner__illust.svg"
          alt="Exam Preparation"
        />
      </div>
    </div>
  );
};

export default HomePage;