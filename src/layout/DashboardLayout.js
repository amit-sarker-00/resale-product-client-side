import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAdmin from "../Hooks/useAdmin";
import Navbar from "../Shared/Navbar/Navbar";

const DashboardLayout = () => {
  const [storeUser, setStoreUser] = useState({});

  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  useEffect(() => {
    axios
      .get(`https://resale-server-side.vercel.app/users/${user?.email}`)
      .then((res) => {
        setStoreUser(res.data);
      });
  }, [user?.email]);
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side border md:shadow-lg">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <Link to="/dashboard/allbuyers">All Buyers</Link>
            </li>
            <li>
              <Link to="/dashboard/myorders">My Orders</Link>
            </li>
            {isAdmin || storeUser?.role === "seller" ? (
              <div>
                <li>
                  <Link to="/dashboard/allseller">All Seller</Link>
                </li>
              </div>
            ) : (
              <></>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
