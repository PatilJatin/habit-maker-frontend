import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useUserContext } from "../context/authContext";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useUserContext();
  const { pathname } = useLocation();

  if (isAuthenticated) {
    return <>{children}</>;
  } else {
    return <Navigate to="/signin" state={`${pathname}`} replace />;
  }
};

export default PrivateRoute;
