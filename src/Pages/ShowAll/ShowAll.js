import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "../../components/BookingModal/BookingModal";
import useTitle from "../../Hooks/useTitle";
import AOS from "aos";
import "aos/dist/aos.css";
import StickyCard from "./StickyCard";
const ShowAll = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  useTitle("category");
  const [modalData, setModalData] = useState({});
  const [datas, setDatas] = useState([]);
  const category = useLoaderData();
  const { categoryName } = category;

  useEffect(() => {
    fetch(`https://resale-server-side.vercel.app/storeBikes/${categoryName}`)
      .then((res) => res.json())
      .then((data) => {
        setDatas(data);
      });
  }, [categoryName]);
  const stickyTopSpace = 50;
  return (
    <div className="mb-10">
      <div className="text-center my-10 text-xl md:text-3xl font-bold">
        <h1>Show all of {categoryName} </h1>
      </div>
      <div className="space-y-20 w-[300px] lg:w-[900px] mx-auto ">
        {datas?.map((card, index) => (
          <StickyCard
            key={card._id}
            StickyCard={card}
            stickyTopSpace={stickyTopSpace * (index + 1)}
          ></StickyCard>
        ))}
      </div>
      <BookingModal modalData={modalData}></BookingModal>
    </div>
  );
};

export default ShowAll;
