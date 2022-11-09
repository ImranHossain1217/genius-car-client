import React from "react";

const OrderRow = ({ order, handleDelete }) => {
  const { price, serviceName, customer, phone, email, _id } = order;



  return (
    <tr>
      <th>
        <label>
         <button onClick={()=> handleDelete(_id)} className="btn btn-ghost">X</button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div>
            <div className="font-bold">{customer}</div>
            <div className="text-sm opacity-50">Phone:{phone}</div>
          </div>
        </div>
      </td>
      <td>
        {serviceName}
        <br />
        <span className="badge badge-ghost badge-sm">${price}</span>
      </td>
      <td>{email}</td>
      <th>
        <button className="btn btn-ghost btn-xs">pending</button>
      </th>
    </tr>
  );
};

export default OrderRow;
