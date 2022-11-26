import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const BookingModal = ({ modalData }) => {
  const { categoryName, resale } = modalData;

  const { register, handleSubmit } = useForm();
  const { user } = useContext(AuthContext);

  return (
    <div>
      <input type="checkbox" id="book-now" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="book-now"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form
            className=" flex flex-col gap-4 items-center justify-center "
            onSubmit={handleSubmit()}
          >
            <input
              defaultValue={categoryName}
              disabled
              className="border border-gray-400 p-2 w-80"
              {...register("productName", {
                required: "productName is Required",
              })}
              placeholder="productName"
            />
            <input
              defaultValue={user?.email}
              disabled
              className="border border-gray-400 p-2 w-80"
              {...register("email", {
                required: "email is Required",
              })}
              placeholder="email"
            />
            <input
              defaultValue={resale}
              disabled
              className="border border-gray-400 p-2 w-80"
              {...register("price", { required: "price is Required" })}
              placeholder="resale price"
            />
            <input
              className="border border-gray-400 p-2 w-80 "
              {...register("phone", { required: "Number is Required" })}
              placeholder="phone number"
            />

            <select
              {...register("location", {
                required: "location is Required",
              })}
              placeholder="location"
              className="border border-gray-400 p-2 w-80"
            >
              <option>Dhaka</option>
              <option>Barishal</option>
              <option>Sylhet</option>
              <option>Rajshahi</option>
              <option>Chattogram</option>
              <option>Rangpur</option>
              <option>Mymensingh</option>
              <option>Khulna</option>
            </select>

            <button className="btn rounded-md p-2 w-80  bg-pink-500 text-black font-bold hover:bg-pink-400">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
