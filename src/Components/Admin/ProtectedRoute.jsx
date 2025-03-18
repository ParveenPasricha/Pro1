import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  return isAuthorized ? <Outlet /> : <Navigate to='/admin' />;
};

export default ProtectedRoute;
