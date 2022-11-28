import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import useTitle from "../../../Hooks/useTitle";
import { RingLoader } from "react-spinners";
import { Link } from "react-router-dom";

const MyOrder = () => {
  useTitle("myOrders");
  const { user, loading } = useContext(AuthContext);
  const { data: orders = [] } = useQuery({
    queryKey: ["order"],
    queryFn: () =>
      fetch(`http://localhost:5000/myorders/${user?.email}`)
        .then((res) => res.json())
        .catch((err) => console.error(err)),
  });
  if (loading) {
    <div style={{ marginLeft: "45%" }}>
      <RingLoader
        color="#36d7b7"
        strokeWidth="5"
        speedMultiplier="3"
        loading="true"
        size="80px"
      />
    </div>;
  }
  return (
    <div className="shadow-lg border my-10">
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Total</th>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, i) => (
              <tr key={order._id}>
                <th>
                  <label>{i + 1}</label>
                </th>
                <td>
                  <div className="">
                    <div className=" w-12 h-12">
                      <img src={order.image} alt="" />
                    </div>
                  </div>
                </td>
                <td>
                  <div>
                    <div className="font-bold">{order.categoryName}</div>
                  </div>
                </td>
                <td>${order.resale}</td>
                <td>
                  {!order?.paid ? (
                    <Link to={`/dashboard/payment/${order._id}`}>
                      <button className="btn btn-xs btn-info">pay</button>
                    </Link>
                  ) : (
                    <button className="btn btn-xs btn-success">paid</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
