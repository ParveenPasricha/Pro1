import React from "react";
import { Outlet } from "react-router-dom";
import NavbarAdmin from "./NavbarAdmin"; // Admin ke liye alag navbar

const AdminLayout = () => {
  return (
    <div>
      <NavbarAdmin />
      <div className="p-6">
        <Outlet /> {/* 🔹 Yeh nested routes render karega */}
      </div>
    </div>
  );
};

export default AdminLayout;
