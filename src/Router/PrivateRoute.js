import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { AuthContext } from "../AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const location = useLocation();
  if (loader) {
    return (
      <div style={{ marginLeft: "45%" }}>
        <BeatLoader
          strokeColor="black"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
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
