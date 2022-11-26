import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useTitle from "../../Hooks/useTitle";
import useToken from "../../Hooks/useToken";
const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [token] = useToken(loginUserEmail);
  const from = location.state?.from?.pathname || "/";
  if (token) {
    navigate(from, { replace: true });
  }
  useTitle("Login");
  const { login, googleSignIn } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handelLogin = (data) => {
    login(data.email, data.password)
      .then(() => {
        setLoginUserEmail(data.email);
        toast.success("Login Successfully");
      })
      .catch((error) => console.log(error));
  };
  const handelGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        toast.success("Login Successfully");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className=" text-center">
      <h1 className="text-3xl lg:text-5xl font-bold text-pink-500 my-10 font-mono">
        Login Here
      </h1>
      <div className="border shadow-xl py-12 w-96  mx-auto">
        <form
          className=" flex flex-col gap-4 items-center justify-center "
          onSubmit={handleSubmit(handelLogin)}
        >
          <input
            className="border border-gray-400 p-2 w-80"
            {...register("email", { required: "Email is Required" })}
            placeholder="email"
          />
          {errors.email && (
            <p className="text-red-500 font-bold">{errors.email?.message}</p>
          )}

          <input
            className="border border-gray-400 p-2 w-80 "
            {...register("password", { required: "Password is Required" })}
            placeholder="password"
          />
          {errors.password && (
            <p className="text-red-500 font-bold">{errors.password?.message}</p>
          )}
          <button className="btn rounded-md p-2 w-80  bg-pink-500 text-black font-bold hover:bg-pink-400">
            Login
          </button>
          <p className="text-pink-500 font-bold">
            Don't Have an Account ?
            <Link className="link" to="/signup">
              SignUp
            </Link>
          </p>
        </form>
        <div className="divider">OR</div>
        <button
          onClick={handelGoogleSignIn}
          className="btn rounded-md p-2 w-80  bg-pink-500 text-black font-bold hover:bg-pink-400"
        >
          Sign in With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
