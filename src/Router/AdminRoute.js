import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { RingLoader } from "react-spinners";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAdmin from "../Hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);
  const location = useLocation();
  if (loading || isAdminLoading) {
    return (
      <div style={{ marginLeft: "45%" }}>
        <RingLoader
          color="#36d7b7"
          strokeWidth="5"
          speedMultiplier="3"
          loading="true"
          size="80px"
        />
      </div>
    );
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
