import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const ShowAll = () => {
  const [datas, setDatas] = useState([]);
  const category = useLoaderData();
  const { categoryName } = category;

  useEffect(() => {
    fetch(`http://localhost:5000/storeBikes/${categoryName}`)
      .then((res) => res.json())
      .then((data) => {
        setDatas(data);
      });
  }, [categoryName]);
  return (
    <div>
      <div className="text-center my-10 text-xl md:text-3xl font-bold">
        <h1>Show all of {categoryName} </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-10">
        {datas.map((data) => (
          <div
            key={data._id}
            className="card w-full sm:w-80  bg-base-100 shadow-xl border mx-auto"
          >
            <figure className="px-4 pt-4">
              <img
                src={data.image}
                alt="bike"
                className="rounded-xl w-full h-64"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{data.categoryName}</h2>

              <div className="flex item-center justify-between">
                <h2 className=" font-bold">seller :{data.sellerName}</h2>
                <h2 className="font-bold"> postDate :{data.date}</h2>
              </div>
              <h2 className="font-bold">Used :{data.used} year</h2>
              <div className="flex items-center justify-between">
                <p>
                  <strong>Original :${data.original}</strong>
                </p>
                <p>
                  <strong>Resale :${data.resale}</strong>
                </p>
              </div>
            </div>
            {/* <div className="mx-auto mb-2">
          <PrimaryButton>
            <Link to={`/showall/${category._id}`}>View All</Link>
          </PrimaryButton>
        </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowAll;
