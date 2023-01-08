import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Addproduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const imageHostKey = process.env.REACT_APP_imgbb_key;
  const handelAddProduct = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    console.log(formData);

    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        if (imageData.success) {
          const product = {
            productName: data.productName,
            price: data.price,
            image: imageData.data.url,
            description: data.description,
            email: data.email,
            type: data.type,
            date: data.purchase,
            location: data.location,
            phone: data.phone,
          };
          fetch("https://resale-server-side.vercel.app/addproduct", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((data) => {
              toast.success("Product added successfully");
              navigate("/myproduct");
              reset();
            });
        }
      });
  };
  return (
    <div>
      <div className="text-center my-10">
        <h1 className="font-bold text-xl md:text-3xl font-mono">ADD PRODUCT</h1>
      </div>
      <div className="border shadow-xl py-12 w-96  mx-auto">
        <form
          className=" flex flex-col gap-4 items-center justify-center "
          onSubmit={handleSubmit(handelAddProduct)}
        >
          <input
            className="border border-gray-400 p-2 w-80"
            {...register("productName", {
              required: "productName is Required",
            })}
            placeholder="productName"
          />
          <input
            className="border border-gray-400 p-2 w-80"
            {...register("email", {
              required: "email is Required",
            })}
            placeholder="email"
          />
          <input
            className="border border-gray-400 p-2 w-80"
            {...register("price", { required: "price is Required" })}
            placeholder="price"
          />
          <select
            {...register("type", { required: "type is Required" })}
            placeholder="type"
            className="border border-gray-400 p-2 w-80"
          >
            <option>excellent</option>
            <option>good</option>
            <option>fair</option>
          </select>
          <input
            type="file"
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
            {...register("purchase", { required: "purchase Date is Required" })}
            placeholder="purchase date"
          />
          <textarea
            className="border border-gray-400 p-2 w-80 "
            {...register("description", {
              required: "description is Required",
            })}
            placeholder="Description"
          />
          <select
            {...register("location", { required: "location is Required" })}
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
            ADD
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addproduct;
