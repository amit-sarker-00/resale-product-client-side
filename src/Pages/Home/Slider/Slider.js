import { useQuery } from "@tanstack/react-query";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
const Slider = () => {
  const { data: banner = [] } = useQuery({
    queryKey: ["bannerItem"],
    queryFn: () =>
      fetch("https://resale-server-side.vercel.app/banner")
        .then((res) => res.json())
        .catch((err) => console.error(err)),
  });
  return (
    <div className="bg-blue-50">
      <Swiper
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Autoplay]}
        className="mySwiper"
      >
        {banner?.slice(-5)?.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="grid items-center grid-cols-1 sm:grid-cols-2 gap-1">
              <div className="text-center ">
                <h1 className="text-xl font-bold md:text:3xl lg:text-5xl ">
                  {item?.categoryName}
                </h1>
                <div className="font-bold mt-4">
                  <p className="line-through">
                    Original Price: ${item?.original}
                  </p>
                  <p className="text-red-500">Resale Price : ${item?.resale}</p>
                </div>
              </div>
              <div className="h-60 md:h-96">
                <img
                  src={item?.image}
                  alt=""
                  className="sm:py-4 h-60 md:h-96 object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
