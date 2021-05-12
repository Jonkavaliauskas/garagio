import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";

const AppointmentShow = props => {
    const { match: { params } } = props;
    const history = useHistory();
    const aptURL = "http://localhost:3000/api/v1/appointments/";

    const [apt, setApt] = useState({});
    const [customer, setCustomer] = useState({});
    const [shop, setShop] = useState({});
    const [car, setCar] = useState({});

    const fetchApt = async (id) => {
        console.log(id);
        fetch(aptURL + id)
            .then(res => res.json())
            .then(res => {
                if (res.success == false) {
                    history.push('/');
                }
                else {
                    console.log(res)
                    setApt(res);
                    setCustomer(res.customer);
                    setShop(res.shop_owner);
                    setCar(res.car);
                }
            });
    }

    useEffect(() => {
        fetchApt(params.appointmentId);
    }, [])

    return (
        <div>
            <h1>{customer.name + "'s"} Appointment</h1>
            <p>Auto Shop: {shop.shop_name}</p>
            <p>Address: {shop.address}</p>
            <h2>Appointment Information</h2>
            <p>Date: {apt.date}</p>
            <p>Vehicle: {car.make + " " + car.model}</p>
            <p>Issues: {apt.car_issue}</p>
        </div>
    )
}

export default AppointmentShow