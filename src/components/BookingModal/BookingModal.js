import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const BookingModal = ({ modalData }) => {
  const { categoryName, resale, image } = modalData;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handelBookProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const categoryName = form.name.value;
    const resale = form.resale.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const location = form.location.value;
    const image = form.image.value;

    const productInfo = {
      resale,
      categoryName,
      email,
      phone,
      location,
      image,
    };
    fetch("http://localhost:5000/booknow", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("booking successfully done!");
        navigate("/dashboard/myorders");
      });
  };
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
            onSubmit={handelBookProduct}
          >
            <input
              defaultValue={categoryName}
              disabled
              className="border border-gray-400 p-2 w-80"
              name="name"
              placeholder="productName"
            />
            <input
              defaultValue={user?.email}
              disabled
              className="border border-gray-400 p-2 w-80"
              name="email"
              placeholder="email"
            />
            <input
              defaultValue={image}
              disabled
              className="border border-gray-400 p-2 w-80"
              name="image"
              placeholder="image"
            />
            <input
              defaultValue={resale}
              disabled
              className="border border-gray-400 p-2 w-80"
              name="resale"
              placeholder="resale price"
            />
            <input
              className="border border-gray-400 p-2 w-80 "
              placeholder="phone number"
              name="phone"
            />

            <select
              name="location"
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
