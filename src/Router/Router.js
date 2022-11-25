import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Addproduct from "../Pages/AddProduct/Addproduct";
import Blogs from "../Pages/Blogs/Blogs";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import MyProduct from "../Pages/MyProduct/MyProduct";
import ShowAll from "../Pages/ShowAll/ShowAll";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
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
        path: "/showall/:id",
        element: (
          <PrivateRoute>
            <ShowAll></ShowAll>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categories/${params.id}`),
      },
    ],
  },
  { path: "*", element: <ErrorPage></ErrorPage> },
]);
