import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import useTitle from "../../../Hooks/useTitle";
import { RingLoader } from "react-spinners";

const AllSeller = () => {
  const { loading } = useContext(AuthContext);
  useTitle("allSeller");
  const sellers = useLoaderData();
  const role = sellers.filter((seller) => seller.role === "seller");
  const { data: seller = [] } = useQuery({
    queryKey: ["seller"],
    queryFn: () =>
      fetch("http://localhost:5000/seller")
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
      <div className="overflow-x-auto w-full ">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Total</th>
              <th>Name</th>
              <th>Email</th>
              <th>Verify</th>
              <th>Manage</th>
            </tr>
          </thead>
          <tbody>
            {seller?.map((sellman, i) => (
              <tr key={sellman._id}>
                <th>
                  <label>{i + 1}</label>
                </th>
                <td>
                  <div className="font-bold">{sellman?.name}</div>
                </td>
                <td>{sellman.email}</td>
                <td>
                  <button className="btn btn-xs btn-warning">verify</button>
                </td>
                <td>
                  <button className="btn btn-xs btn-info">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSeller;
