import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { RingLoader } from "react-spinners";
import toast from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";
import useTitle from "../../Hooks/useTitle";
const MyProduct = () => {
  useTitle("my-product");
  useEffect(() => {
    AOS.init();
  }, []);
  const { user, loading } = useContext(AuthContext);
  const { data: products = [], refetch } = useQuery({
    queryKey: ["product"],
    queryFn: () =>
      fetch(`http://localhost:5000/product/${user?.email}`)
        .then((res) => res.json())
        .catch((err) => console.error(err)),
  });
  if (loading) {
    return (
      <div style={{ marginLeft: "45%" }}>
        <RingLoader
          color="#36d7b7"
          strokeWidth="5"
          speedMultiplier="3"
          loading="true"
          size="80px"
        />
      </div>
    );
  }
  const handelDelete = (id) => {
    fetch(`http://localhost:5000/product/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Deleted successfully");
        }
        refetch();
      });
  };

  return (
    <div>
      <div
        data-aos="fade-left"
        data-aos-offset="300"
        className="overflow-x-auto w-full my-10 shadow-md border"
      >
        <table className="table w-full">
          <thead>
            <tr>
              <th>Total</th>
              <th>Product</th>
              <th>Price</th>
              <th>Boost</th>
              <th>Manage</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product, i) => (
              <tr key={product._id}>
                <th>
                  <label>{i + 1}</label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={product.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{product.productName}</div>
                      <div className="text-sm opacity-50">
                        {product.location}
                      </div>
                    </div>
                  </div>
                </td>
                <td>${product.price}</td>
                <td>
                  <button className="btn btn-xs btn-warning">Advertise</button>
                </td>
                <td>
                  <button
                    onClick={() => handelDelete(product._id)}
                    className="btn btn-xs btn-info"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProduct;
