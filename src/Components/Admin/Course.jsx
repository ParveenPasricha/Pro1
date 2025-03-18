import React, { useEffect, useState } from "react";
import axios from "axios";
import NavbarAdmin from "./NavbarAdmin";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Course = () => {
  const [formData, setFormData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/admin/course");
      setFormData(response.data);
    } catch (err) {
      setError("Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/admin/delete/${id}`);
      setFormData(formData.filter((course) => course._id !== id));
    } catch (err) {
      console.error("Error deleting course", err);
    }
  };

  const handleEdit = (course) => {
    setEditData(course);
  };

  const handleUpdate = async () => {
    try {
      await axios.put(
        `http://localhost:5000/admin/update/${editData._id}`,
        editData
      );
      fetchData();
      setEditData(null);
    } catch (err) {
      console.error("Error updating course", err);
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <NavbarAdmin />
      <div className="max-w-6xl mt-44 mx-auto p-6">
        <h2 className="text-3xl font-bold text-center mb-6">Manage Courses</h2>

        {loading && <p className="text-center text-yellow-400">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {!loading && !error && formData.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {formData.map((post) => (
              <div
                key={post._id}
                className="bg-gray-800 rounded-lg shadow-md p-6 border border-gray-700 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-sm text-gray-400">
                  Total Tests: {post.total_tests}
                </p>
                <p className="text-sm text-gray-400">
                  Free Tests: {post.free_tests}
                </p>
                <p className="text-sm text-gray-400">
                  Languages: {post.languages}
                </p>
                <p className="text-sm text-gray-400">
                  details: {post.details}
                </p>
                <p className="text-sm text-gray-400">Users: {post.users}</p>
                <div className="flex justify-between items-center mt-4">
                  <button
                    className="text-blue-400 hover:text-blue-500"
                    onClick={() => handleEdit(post)}
                  >
                    <FaRegEdit size={20} />
                  </button>
                  <button
                    className="text-red-400 hover:text-red-500"
                    onClick={() => handleDelete(post._id)}
                  >
                    <MdDelete size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          !loading && <p className="text-center text-gray-400">No courses available</p>
        )}
      </div>

      {editData && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-bold mb-3">Edit Course</h3>
            
            <label>Title:</label>
            <input
              type="text"
              className="w-full p-2 mb-2 bg-gray-700 text-white border border-gray-600 rounded"
              value={editData.title}
              onChange={(e) =>
                setEditData({ ...editData, title: e.target.value })
              }
            />

            <label>Total Tests:</label>
            <input
              type="text"
              className="w-full p-2 mb-2 bg-gray-700 text-white border border-gray-600 rounded"
              value={editData.total_tests}
              onChange={(e) =>
                setEditData({ ...editData, total_tests: e.target.value })
              }
            />

            <label>Free Tests:</label>
            <input
              type="text"
              className="w-full p-2 mb-2 bg-gray-700 text-white border border-gray-600 rounded"
              value={editData.free_tests}
              onChange={(e) =>
                setEditData({ ...editData, free_tests: e.target.value })
              }
            />

            <label>Languages:</label>
            <input
              type="text"
              className="w-full p-2 mb-2 bg-gray-700 text-white border border-gray-600 rounded"
              value={editData.languages}
              onChange={(e) =>
                setEditData({ ...editData, languages: e.target.value })
              }
            />

            <label>Details:</label>
            <input
              type="text"
              className="w-full p-2 mb-2 bg-gray-700 text-white border border-gray-600 rounded"
              value={editData.details}
              onChange={(e) =>
                setEditData({ ...editData, details: e.target.value })
              }
            />

            <div className="flex justify-end mt-4">
              <button
                className="bg-blue-500 px-4 py-2 rounded text-white mr-2"
                onClick={handleUpdate}
              >
                Save Changes
              </button>
              <button
                className="bg-gray-500 px-4 py-2 rounded text-white"
                onClick={() => setEditData(null)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Course;
