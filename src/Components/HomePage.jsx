import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex items-center justify-between px-20 py-20 bg-gradient-to-b from-white to-blue-100">
      <div className="w-1/2 space-y-4">
        <h1 className="text-4xl font-bold">
          <span className="bg-blue-600 text-white px-2 py-1 rounded">One Destination for</span>
        </h1>
        <h2 className="text-3xl font-bold text-gray-800">Complete Exam Preparation</h2>
        <p className="text-gray-600 text-lg">Learn ► Practice ► Improve ► Succeed</p>

        <p className="text-gray-500">Start your preparation for selections. For Free!</p>

        <div className="flex space-x-4">
          <Link className="bg-green-600 text-white px-4 py-2 rounded" to={"/login"}>
            Get Started for Free
          </Link>
          <img
            className="w-36"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1280px-Google_Play_Store_badge_EN.svg.png"
            alt="Google Play"
          />
        </div>
      </div>

      <div className="w-1/2 flex justify-end">
        <img
          className="w-[500px]"
          src="https://testbook.com/assets/img/index/home-banner__illust.svg"
          alt="Exam Preparation"
        />
      </div>
    </div>
  );
};

export default HomePage;
