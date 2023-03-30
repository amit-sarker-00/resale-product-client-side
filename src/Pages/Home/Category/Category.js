import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Category = () => {
  const { data: categories = [] } = useQuery({
    queryKey: ["category"],
    queryFn: () =>
      fetch("https://resale-server-side.vercel.app/categories")
        .then((res) => res.json())
        .catch((err) => console.error(err)),
  });
  return (
    <div>
      <div className="my-10 ">
        <h1 className="text-center font-bold text-pink-500 text-base md:text-3xl ">
          Categories
        </h1>
      </div>
      <div>
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-1">
          {categories?.map((category) => (
            <div
              key={category?._id}
              className="  w-20 sm:w-32 md:w-40 lg:w-52 sm:h-20 md:h-28 lg:h-36  bg-base-100  border mx-auto"
            >
              <Link to={`/showall/${category?._id}`}>
                <img
                  src={category?.image}
                  alt="bike"
                  className="w-full h-full  object-cover text-center"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
