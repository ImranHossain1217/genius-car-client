import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import OrderRow from "./OrderRow";

const Order = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user?.email]);

  const handleDelete = (id) => {
    const process = window.confirm("Are You Sure, Cancel Your Order?");
    if (process) {
      fetch(`http://localhost:5000/orders/${id}`,{
        method: 'DELETE'
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Deleted Successfully!!");
            const remainingOrder = orders.filter((odr) => odr._id !== id);
            console.log(remainingOrder);
            setOrders(remainingOrder);
          }
        });
    }
  };

  return (
    <div>
      <h2 className="text-3xl my-5 uppercase font-semibold text-center">
        You Have {orders.length} Orders
      </h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-11/12 my-10 mx-auto">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Title</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <OrderRow
                key={order._id}
                order={order}
                handleDelete={handleDelete}
              ></OrderRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
