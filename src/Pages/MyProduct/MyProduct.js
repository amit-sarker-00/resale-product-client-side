import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const MyProduct = () => {
  const { user } = useContext(AuthContext);
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["product"],
    queryFn: () =>
      fetch(`http://localhost:5000/product/${user?.email}`)
        .then((res) => res.json())
        .catch((err) => console.error(err)),
  });
  console.log(products);
  return (
    <div>
      {products?.map((product) => (
        <div
          key={product._id}
          className="card w-full sm:w-80  bg-base-100 shadow-xl border mx-auto"
        ></div>
      ))}
    </div>
  );
};

export default MyProduct;
