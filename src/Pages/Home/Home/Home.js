import React from "react";
import useTitle from "../../../Hooks/useTitle";
import Category from "../Category/Category";
import LatestSell from "../LatestSell/LatestSell";
import Slider from "../Slider/Slider";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Slider></Slider>
      <Category></Category>
      <LatestSell></LatestSell>
    </div>
  );
};

export default Home;
