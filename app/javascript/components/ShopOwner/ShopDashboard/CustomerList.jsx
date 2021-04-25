import React from "react";
import CustomerBox from "./CustomerBox";

const CustomerList = ({ customers }) => {
  return (
    <>
      {customers.map((customer) => (
        <div className='testing' key={customer.id}>
          <CustomerBox
            key={customer.id}
            name={customer["name"]}
            email={customer["email"]}
            phone={customer["phone"]}
          />
        </div>
      ))}
    </>
  );
};

export default CustomerList;
