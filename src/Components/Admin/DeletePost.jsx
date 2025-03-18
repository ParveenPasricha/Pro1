import React, { useState, useEffect } from "react";
import axios from "axios";
import NavbarAdmin from "./NavbarAdmin";

const DeletePost = () => {
  const [formData, setFormData] = useState([]); // Ensuring default is an array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/admin/deletepost"
        ); // Ensure correct API port

        console.log("API Response:", response.data); // Debugging API response

        // Ensure data is an array, or extract from key
        const data = Array.isArray(response.data)
          ? response.data
          : response.data.posts || [];

        setFormData(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Error fetching data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <NavbarAdmin />
      <div className="bg-amber-900 mt-45 p-5 text-white">
        <h2 className="text-xl font-bold">Delete Post</h2>

        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {!loading && !error && (
          <div className="mt-4">
            {formData.length > 0 ? (
              formData.map((post, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-lg mb-3">
                  <h3 className="text-lg font-semibold">
                    {post.title || "Untitled"}
                  </h3>
                  <p>Total Tests: {post.total_tests || "N/A"}</p>
                  <p>Free Tests: {post.free_tests || "N/A"}</p>
                  <p>Languages: {post.languages || "N/A"}</p>
                  <p>Course Details: {post.details || "N/A"}</p>
                  <p>Users: {post.users || "N/A"}</p>
                </div>
              ))
            ) : (
              <p>No posts available.</p>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default DeletePost;
