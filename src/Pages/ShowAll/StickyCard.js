import React from "react";
// import Lottie from "lottie-react";

const StickyCard = ({ StickyCard, stickyTopSpace }) => {
  const { categoryName, original, resale, image } = StickyCard;
  console.log(StickyCard);

  return (
    <div
      className={`sticky grid grid-cols-1 overflow-hidden rounded bg-pink-100 card shadow-[0px_0px_30px_-10px_rgba(0,0,0,0.1)] md:grid-cols-2 border  border-gray-600 h-96`}
      style={{ top: stickyTopSpace }}
    >
      <div className="flex flex-col justify-center p-5">
        <div className="space-y-4">
          <h2 className="font-serif text-2xl -mb-2 font-bold">
            {categoryName}
          </h2>
          <div className="flex items-center justify-between font-semibold">
            <p className="lg:w-3/4 text-lg">Original Price : {original}</p>
            <p className="lg:w-3/4 text-lg">Resale Price: {resale}</p>
          </div>
        </div>
      </div>
      <div className="relative h-full">
        <img src={image} alt="" className="object-cover h-full" />
      </div>
    </div>
  );
};

export default StickyCard;
