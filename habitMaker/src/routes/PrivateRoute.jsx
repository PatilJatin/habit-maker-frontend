import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const IsAuth = true;
  const { pathname } = useLocation();

  if (IsAuth) {
    return <>{children}</>;
  } else {
    return <Navigate to="/login" state={`${pathname}`} replace />;
  }
};

export default PrivateRoute;
