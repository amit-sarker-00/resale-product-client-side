import React from "react";
import { Link } from "react-router-dom";
import { FaRProject } from "react-icons/fa";
import "./Navbar.css";
const Navbar = () => {
  const menuBar = (
    <>
      <li>
        <Link to="/home">HOME</Link>
      </li>
      <li>
        <Link to="/blogs">BLOGS</Link>
      </li>
      <li>
        <Link to="/myorders">ORDERS</Link>
      </li>
      <li className="" tabIndex={0}>
        <Link>CATEGORIES</Link>
        <ul className="p-2 bg-white   text-black font-bold">
          <li className=" hover:text-white">
            <Link>ELECTRIC BIKES</Link>
          </li>
          <li className=" hover:text-white">
            <Link>LUXURY BIKES</Link>
          </li>
          <li className=" hover:text-white">
            <Link>TOP OLD BIKES</Link>
          </li>
        </ul>
      </li>
    </>
  );

  return (
    <div className="  w-full navbar">
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact text-center dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box"
            >
              {menuBar}
            </ul>
          </div>
          <Link
            to="/"
            className="pl-5 font-mono font-bold text-xl hidden sm:block"
          >
            ResaleHolder
          </Link>
          <Link to="/" className="font-mono font-bold text-2xl sm:hidden">
            <FaRProject className="text-black"></FaRProject>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuBar}</ul>
        </div>
        <div className="navbar-end pr-5">
          <Link
            to="/login"
            className=" text-white font-bold hover:bg-violet-900 p-2 bg-pink-500 border-none rounded-xl"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
