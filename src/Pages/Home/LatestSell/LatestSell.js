import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const LatestSell = () => {
  const { data: latestSell = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch("http://localhost:5000/latestSell")
        .then((res) => res.json())
        .catch((err) => console.error(err)),
  });
  return (
    <div className="my-20">
      <div>
        <h1 className="text-center my-8 font-bold text-xl md:text-3xl">
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
            <div className="card w-full sm:w-80  bg-base-100 shadow-xl border">
              <figure className="px-4 pt-4">
                <img
                  src={latest.image}
                  alt="bike"
                  className="rounded-xl w-full h-64"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{latest.name}</h2>
                <p>
                  <strong>Price: ${latest.price}</strong>
                </p>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default LatestSell;
