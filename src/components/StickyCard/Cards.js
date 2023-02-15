import React from "react";
import Card from "./Card";
import { cardsData } from "./Data";
const Cards = () => {
  const stickyTopSpace = 50;
  return (
    <div className="py-10 ">
      <div className="space-y-20 w-[300px] lg:w-[900px] mx-auto ">
        {cardsData.map((card, index) => (
          <Card
            key={card.id}
            Data={card}
            stickyTopSpace={stickyTopSpace * (index + 1)}
          ></Card>
        ))}
      </div>
    </div>
  );
};

export default Cards;
