import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useTitle from "../../Hooks/useTitle";
const SignUp = () => {
  useTitle("SignUp");
  const { createUser, googleSignIn } = useContext(AuthContext);
  const [user, SetUSer] = useState("");
  const { register, handleSubmit, reset } = useForm();
  const handelSignUp = (data) => {
    createUser(data.email, data.password)
      .then(() => {
        savedUser(data.name, data.email, data.role);
        toast.success("User Create Successfully");
        reset();
      })
      .catch((error) => console.log(error));
  };
  const handelGoogleSignIn = () => {
    googleSignIn()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const savedUser = (name, email, role, image) => {
    const user = { name, email, role, image };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        SetUSer(email);
      });
  };
  return (
    <div className=" text-center">
      <h1 className="text-3xl lg:text-5xl font-bold text-pink-500 my-10 font-mono">
        SignUp Here
      </h1>
      <div className="border shadow-xl py-12 w-96  mx-auto">
        <form
          className=" flex flex-col gap-4 items-center justify-center "
          onSubmit={handleSubmit(handelSignUp)}
        >
          <input
            className="border border-gray-400 p-2 w-80"
            {...register("name", { required: "Name is Required" })}
            placeholder="name"
          />
          <input
            className="border border-gray-400 p-2 w-80"
            {...register("email", { required: "Email is Required" })}
            placeholder="email"
          />
          <select
            {...register("role", { required: "role is Required" })}
            placeholder="role"
            className="border border-gray-400 p-2 w-80"
          >
            <option>seller</option>
            <option>user</option>
          </select>
          <input
            className="border border-gray-400 p-2 w-80"
            {...register("image", { required: "image is Required" })}
            placeholder="image"
          />
          <input
            className="border border-gray-400 p-2 w-80 "
            {...register("phone", { required: "Number is Required" })}
            placeholder="phone number"
          />
          <input
            className="border border-gray-400 p-2 w-80 "
            {...register("password", { required: "Password is Required" })}
            placeholder="password"
          />

          <button className="btn rounded-md p-2 w-80  bg-pink-500 text-black font-bold hover:bg-pink-400">
            SignUp
          </button>
          <p className="text-pink-500 font-bold">
            Already Have an Account ?
            <Link className="link" to="/login">
              Login
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

export default SignUp;
