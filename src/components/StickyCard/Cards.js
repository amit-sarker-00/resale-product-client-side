import { useQuery } from "@tanstack/react-query";
import React from "react";
import Card from "./Card";
// import { cardsData } from "./Data";
const Cards = () => {
  const { data: recent = [] } = useQuery({
    queryKey: ["recents"],
    queryFn: () =>
      fetch("https://resale-server-side.vercel.app/recent")
        .then((res) => res.json())
        .catch((err) => console.error(err)),
  });
  console.log(recent);
  const stickyTopSpace = 50;
  return (
    <div className="py-10 ">
      <div className="my-10 ">
        <h1 className="text-center font-bold text-pink-500 text-xl md:text-3xl ">
          Recent Added
        </h1>
      </div>
      <div className="space-y-20 w-[300px] lg:w-[900px] mx-auto ">
        {recent.map((card, index) => (
          <Card
            key={card._id}
            card={card}
            stickyTopSpace={stickyTopSpace * (index + 1)}
          ></Card>
        ))}
      </div>
    </div>
  );
};

export default Cards;
