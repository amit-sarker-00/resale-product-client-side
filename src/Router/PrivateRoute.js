import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { RingLoader } from "react-spinners";
import { AuthContext } from "../AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div style={{ marginLeft: "45%" }}>
        <RingLoader
          color="#36d7b7"
          strokeWidth="5"
          speedMultiplier="3"
          loading="true"
          size="80"
        />
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
