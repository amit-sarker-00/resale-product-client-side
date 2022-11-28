import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import PaymentForm from "./PaymentForm";

const Payment = () => {
  const order = useLoaderData();
  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
  return (
    <div>
      <div className="text-center my-6">
        <h1 className="text-xl md:text-3xl font-bold text-sky-500">
          payment for {order?.categoryName}
        </h1>
        <p className="text-md md:text-2xl font-bold text-indigo-500 my-5">
          {" "}
          Please Pay <span className="text-red-400">${order?.resale}</span> for
          buy this {order?.categoryName}{" "}
        </p>
        <div className="">
          <div className="mx-auto sm:w-64 w-full border shadow-md">
            <img className=" w-full p-4" src={order?.image} alt="" />
          </div>
        </div>
        <div className="my-6 w-80 border p-10 mx-auto shadow-lg">
          <Elements stripe={stripePromise}>
            <PaymentForm order={order} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
