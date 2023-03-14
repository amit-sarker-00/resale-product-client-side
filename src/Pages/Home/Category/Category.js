import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
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
        <h1 className="text-center font-bold text-pink-500 text-xl md:text-3xl ">
          Categories
        </h1>
      </div>
      <Swiper
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        pagination={true}
        modules={[EffectCoverflow, Autoplay]}
        className="mySwiper"
      >
        {categories?.slice(-8)?.map((category, i) => (
          <SwiperSlide key={i}>
            <div className="grid grid-cols-8 gap-1">
              {categories?.map((category) => (
                <div
                  key={category?._id}
                  className=" lg:w-36 sm:w-20 md:w-28 sm:h-20 md:h-28 lg:h-36  bg-base-100  border mx-auto"
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Category;
