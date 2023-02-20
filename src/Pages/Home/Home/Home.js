import React, { useEffect, useState } from "react";
import Loading from "../../../components/Loading/Loading";
import Cards from "../../../components/StickyCard/Cards";
import useTitle from "../../../Hooks/useTitle";
import Category from "../Category/Category";
import LatestSell from "../LatestSell/LatestSell";
import Slider from "../Slider/Slider";

const Home = () => {
  const [loading, setLoading] = useState(true);
  useTitle("Home");
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000); // replace this with your actual data fetching code
  }, []);

  if (loading) {
    return (
      <div>
        <Loading></Loading>
      </div>
    );
  }

  return (
    <div>
      <Slider></Slider>
      <Category></Category>
      <LatestSell></LatestSell>
      <Cards></Cards>
    </div>
  );
};

export default Home;
