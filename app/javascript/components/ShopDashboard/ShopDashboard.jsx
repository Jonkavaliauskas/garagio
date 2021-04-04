import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CustomerBox from "./CustomerBox";
import Button from "../Button";
import ShopCalendar from "./ShopCalendar";

const ShopDashboard = (props) => {
  const [appointments, setAppointments] = useState([]);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getAppointments(appointments, setAppointments);
  }, []);

  const getAppointments = async () => {
    const shopOwner = await fetchShopOwner(props.location.state.shopOwnerId);
    const apptsFromServer = shopOwner["appointments"];
    setAppointments(apptsFromServer);

    for (const appt of apptsFromServer) {
      const customerData = await fetchCustomer(appt["customer_id"]);
      setCustomers([...customers, customerData]);
    }
  };

  const fetchShopOwner = async (id) => {
    const res = await fetch(`http://localhost:3000/api/v1/shop_owners/${id}`);
    const data = await res.json();

    return data;
  };

  const fetchCustomer = async (id) => {
    const res = await fetch(`http://localhost:3000/api/v1/customers/${id}`);
    const data = await res.json();

    return data;
  };

  return (
    <div>
      <div
        style={{
          position: "fixed",
          // left: '93%',
          // up: '4%'
        }}
        className="m-2"
      >
        <Link to="/register">
          <Button className="btn btn-lg custom-button" text="Sign Out" />
        </Link>
      </div>
      <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
          <div className="col-3 d-flex flex-column justify-content-center align-items-center">
            <h3>Customers</h3>
            {customers.map((customer) => (
              <CustomerBox
                key={customer["id"]}
                name={customer["name"]}
                email={customer["email"]}
                phone={customer["phone"]}
                className="list-group-item"
              />
            ))}
          </div>
        <div className="container-fluid d-flex justify-content-center">
          <div>
            <ShopCalendar
              appointments={appointments}
              customers={customers}
              fetchCustomer={fetchCustomer}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopDashboard;
