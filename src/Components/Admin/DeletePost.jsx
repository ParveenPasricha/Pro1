import React, { useState, useEffect } from "react";
import axios from "axios";
import NavbarAdmin from "./NavbarAdmin";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const DeletePost = () => {
  const [formData, setFormData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/admin/deletepost");
        console.log("API Response:", response.data);
        const data = Array.isArray(response.data) ? response.data : response.data.posts || [];
        setFormData(data);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleEdit = (postId) => {
    console.log("Editing Post ID:", postId);
    navigate(`/editpost/${postId}`);
  };

  const handleDelete = async (postId) => {
    if (!window.confirm("Are you sure you want to delete this post?")) return;

    try {
      await axios.delete(`http://localhost:5000/admin/deletepost/${postId}`);
      setFormData((prevData) => prevData.filter((post) => post._id !== postId));
      console.log("Post deleted:", postId);
    } catch (err) {
      console.error("Error deleting post:", err);
      alert("Failed to delete the post.");
    }
  };

  return (
    <>
      <NavbarAdmin />
      <div className="bg-amber-900 mt-44 p-5 text-white">
        <h2 className="text-xl font-bold">Delete Post / Edit Post</h2>

        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {!loading && !error && (
          <div className="mt-4">
            {formData.length > 0 ? (
              formData.map((post, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-lg mb-3">
                  <h3 className="text-lg font-semibold">{post.title || "Untitled"}</h3>
                  <p>Total Tests: {post.total_tests || "N/A"}</p>
                  <p>Free Tests: {post.free_tests || "N/A"}</p>
                  <p>Languages: {post.languages || "N/A"}</p>
                  <p>Course Details: {post.details || "N/A"}</p>
                  <p>Users: {post.users || "N/A"}</p>
                  <div className="flex gap-3 mt-2">
                    <button onClick={() => handleEdit(post._id)} className="text-2xl text-blue-400">
                      <FaRegEdit />
                    </button>
                    <button onClick={() => handleDelete(post._id)} className="text-2xl text-red-400">
                      <MdDelete />
                    </button>
                  </div>
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
