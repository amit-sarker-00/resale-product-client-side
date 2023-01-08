import React from "react";
import { createBrowserRouter } from "react-router-dom";
import BookingModal from "../components/BookingModal/BookingModal";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import Addproduct from "../Pages/AddProduct/Addproduct";
import Blogs from "../Pages/Blogs/Blogs";
import AllSeller from "../Pages/Dashboard/AllSeller/AllSeller";
import MyOrder from "../Pages/Dashboard/MyOrder/MyOrder";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import MyProduct from "../Pages/MyProduct/MyProduct";
import ShowAll from "../Pages/ShowAll/ShowAll";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import AllBuyers from "../Pages/Dashboard/AllBuyers/AllBuyers";
import AdminRoute from "./AdminRoute";
import Payment from "../Pages/Payment/Payment";
import DisplayError from "../Shared/DisplayError/DisplayError";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/addproduct",
        element: <Addproduct></Addproduct>,
      },
      {
        path: "/myproduct",
        element: <MyProduct></MyProduct>,
      },
      {
        path: "/bookingmodal",
        element: <BookingModal></BookingModal>,
      },

      {
        path: "/showall/:id",
        element: (
          <PrivateRoute>
            <ShowAll></ShowAll>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://resale-server-side.vercel.app/categories/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/dashboard",
    errorElement: <DisplayError></DisplayError>,
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/allbuyers",
        element: (
          <AdminRoute>
            <AllBuyers></AllBuyers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allseller",
        element: <AllSeller></AllSeller>,
        loader: () => fetch("https://resale-server-side.vercel.app/sellers"),
      },
      { path: "/dashboard/myorders", element: <MyOrder></MyOrder> },
      {
        path: "/dashboard/payment/:id",
        element: <Payment></Payment>,
        loader: ({ params }) =>
          fetch(`https://resale-server-side.vercel.app/orders/${params.id}`),
      },
    ],
  },
  { path: "*", element: <ErrorPage></ErrorPage> },
]);
