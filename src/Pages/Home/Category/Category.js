import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import PrimaryButton from "../../../components/PrimaryButton";
const Category = () => {
  useEffect(() => {
    AOS.init();
  }, []);
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
        <h1 className="text-center font-bold text-xl md:text-3xl ">
          Categories
        </h1>
      </div>
      <div
        data-aos="fade-up"
        data-aos-offset="300"
        data-aos-duration="700"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 "
      >
        {categories?.map((category) => (
          <div
            key={category._id}
            className="card w-full sm:w-80  bg-base-100 shadow-xl border mx-auto"
          >
            <figure className="px-4 pt-4">
              <img
                src={category.image}
                alt="bike"
                className="rounded-xl w-full h-64"
              />
            </figure>
            <div className="card-body mx-auto">
              <h2 className="card-title">{category.categoryName}</h2>
            </div>
            <div className="mx-auto mb-2">
              <PrimaryButton>
                <Link to={`/showall/${category._id}`}>View All</Link>
              </PrimaryButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
