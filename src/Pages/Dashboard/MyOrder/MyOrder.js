import React from "react";
import useTitle from "../../../Hooks/useTitle";

const MyOrder = () => {
  useTitle("myOrders");
  return (
    <div>
      <h1>My Orders</h1>
    </div>
  );
};

export default MyOrder;
