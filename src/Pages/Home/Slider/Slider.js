import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import img1 from "../../../assets/img1.jpg";
import img2 from "../../../assets/img2.jpg";
import img3 from "../../../assets/img3.jpg";
import "./Slider.css";
const Slider = () => {
  const sliderImg = [
    {
      id: 1,
      image: img2,
    },
    {
      id: 2,
      image: img1,
    },
    {
      id: 3,
      image: img3,
    },
  ];
  return (
    <Splide
      aria-label=""
      options={{
        autoplay: true,
        height: "80vh",
        breakpoints: {
          1280: {
            height: "50vh",
          },
          1024: {
            height: "30vh",
          },
        },
        rewind: true,
        arrows: false,
        pagination: false,
        speed: "2000",
      }}
    >
      {sliderImg?.map((slider) => (
        <SplideSlide key={slider.id}>
          <div className="slide">
            <img className="w-full rounded-md" src={slider.image} alt="" />
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default Slider;
