import React, { useContext } from "react";
import { Link, useRouteError } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const DisplayError = () => {
  const { logOut } = useContext(AuthContext);
  const error = useRouteError();
  const handelSignOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <p className="text-red-500 font-bold text-xl">Something went wrong</p>
      <p>{error.status || error.message}</p>
      <h4 className="text-2xl">
        {" "}
        Please{" "}
        <Link to="/login">
          <button
            className="btn btn-xs bg-pink-500 hover:bg-pink-400"
            onClick={handelSignOut}
          >
            Logout
          </button>
        </Link>{" "}
        and log back in
      </h4>
    </div>
  );
};

export default DisplayError;
