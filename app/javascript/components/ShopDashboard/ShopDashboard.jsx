import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Button from "../Button";
import ShopCalendar from "./ShopCalendar";
import CustomerList from "./CustomerList";
import Footer from "../Footer";

const ShopDashboard = (props) => {

  let history = useHistory();

  const [appointments, setAppointments] = useState([]);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getAppointments(appointments, setAppointments);
  }, []);

  const getAppointments = async () => {
    const shopOwner = await fetchShopOwner(props.location.state.shopOwnerId);
    const apptsFromServer = shopOwner["appointments"];
    var tempCustomers = [];
    setAppointments(apptsFromServer);

    for (var appt of apptsFromServer) {
      const customerData = await fetchCustomer(appt["customer_id"]);
      if (!(tempCustomers.some(customer => customer['id'] === customerData['id']))) {
        tempCustomers.push(customerData);
      }
    }
    setCustomers(tempCustomers);
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
        }}
        className="m-2"
      >
        <Link to="/">
          <Button className="btn btn-lg custom-button" text="Sign Out" />
        </Link>
      </div>
      <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
        <div className="col-3 d-flex flex-column justify-content-center align-items-center">
          <h3>Customers</h3>
          <div>
            <CustomerList customers={customers} />
          </div>
        </div>
        <div className="d-flex container-fluid justify-content-center flex-row col-9">
          <div>
            <ShopCalendar
              appointments={appointments}
              fetchCustomer={fetchCustomer}
              shopOwnerId={props.location.state.shopOwnerId}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopDashboard;
