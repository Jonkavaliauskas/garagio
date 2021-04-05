import React from "react";

const CustomerBox = ({ name, email, phone }) => {
  return (
    <div className="customer-box">
      <p className="customer-name">{name}</p>
      <p className="customer-email">{email}</p>
      <p className="customer-phone">{phone}</p>
    </div>
  );
};

export default CustomerBox;
