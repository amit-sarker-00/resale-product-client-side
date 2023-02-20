import { Splide, SplideSlide } from "@splidejs/react-splide";
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
    <div className="my-20">
      <div>
        <h1 className="text-center text-pink-500 my-8 font-bold text-xl md:text-3xl">
          Latest Sell
        </h1>
      </div>
      <Splide
        aria-label=""
        options={{
          speed: "3000",
          autoplay: true,
          rewind: true,
          perPage: 4,
          breakpoints: {
            1280: {
              perPage: 3,
            },
            1024: {
              perPage: 2,
            },
            640: {
              perPage: 1,
            },
          },
          arrows: false,
          pagination: false,
        }}
      >
        {latestSell?.map((latest) => (
          <SplideSlide key={latest._id}>
            <div className=" w-full sm:w-80 mx-auto  bg-base-100  border">
              <figure className="px-4 pt-4">
                <img src={latest.image} alt="bike" className=" w-full h-64" />
              </figure>
              <div className="mx-4 my-2">
                <h2 className="card-title">{latest.name}</h2>
                <p className="mt-1 font-semibold">
                  Resale Price: ${latest.price}
                </p>
              </div>
              <div className="mx-auto mb-0">
                <PrimaryButton>
                  <Link>More Info</Link>
                </PrimaryButton>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default LatestSell;
