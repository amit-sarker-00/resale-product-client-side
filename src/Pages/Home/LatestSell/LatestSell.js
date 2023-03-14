import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../../../components/PrimaryButton";

const LatestSell = () => {
  const { data: latestSell = [] } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch("https://resale-server-side.vercel.app/latestSell")
        .then((res) => res.json())
        .catch((err) => console.error(err)),
  });
  return (
    <div className="my-10">
      <div>
        <h1 className="text-center text-pink-500 my-8 font-bold text-xl md:text-3xl">
          Latest Sell
        </h1>
      </div>
      <div className="grid grid-cols-5 gap-1">
        {latestSell?.slice(-5).map((latest) => (
          <div key={latest._id}>
            <div className=" w-20 sm:w-32 md:w-40 lg:w-52 mb-2 mx-auto  bg-base-100  border">
              <div className="">
                <img
                  src={latest.image}
                  alt="bike"
                  className=" p-3 w-full object-cover h-20 sm:h-36"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestSell;
