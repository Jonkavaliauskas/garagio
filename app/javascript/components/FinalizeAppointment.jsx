import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import Footer from './Footer'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import PhoneInput from "react-phone-input-auto-format";


const FinalizeAppointment = (props) => {
    const { year, make, model, body, shop, services } = props.location.state;

    const CUSTOMER_URL = "http://localhost:3000/api/v1/customers/index"
    const CAR_URL = "http://localhost:3000/api/v1/cars/index"
    const APPOINTMENT_URL = "http://localhost:3000/api/v1/appointments/index"
    const APPOINTMENT_SHOW_URL = "http://localhost:3000/appointments/"

    let history = useHistory();

    const createCustomer = (formData) => {
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            phone: formData.get("phone")
        }

        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }

        fetch(CUSTOMER_URL, configObj)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Network response was not ok.");
            })
            .then(res => {
                createCar(formData, res.id);
            });
    }

    const createCar = (formData, customer_id) => {
        const data = {
            customer_id: customer_id,
            make: make,
            model: model,
            year: year,
            body_style: body
        }

        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }

        fetch(CAR_URL, configObj)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Network response was not ok.");
            })
            .then(res => {
                createAppointment(formData, res.customer_id, res.id);
            });
    }
    const formatDate = (dateObject) => {
        const year = dateObject.getFullYear();
        const date = dateObject.getDate();
        const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ]
        const days = [
            'Sun',
            'Mon',
            'Tue',
            'Wed',
            'Thu',
            'Fri',
            'Sat'
        ]
        const monthName = months[dateObject.getMonth()]
        const dayName = days[dateObject.getDay()]

        return `${dayName}, ${monthName} ${date}, ${year}`
    }

    const createAppointment = (formData, customer_id, car_id) => {
        const data = {
            customer_id: customer_id,
            // TODO: Add datetime form
            date: formData.get("appointment_datetime"),
            car_issue: services.join(", "),
            shop_owner_id: shop.id,
            car_id: car_id
        }

        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }

        fetch(APPOINTMENT_URL, configObj)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Network response was not ok.");
            })
            .then(res => {
                let date_obj = new Date(res.date);
                let date_string = formatDate(date_obj);
                let time_string = date_obj.toLocaleString('en-US', { timeZone: 'UTC' }).split(" ")[1].split(":")[0] + ":" + date_obj.toLocaleString('en-US', { timeZone: 'UTC' }).split(" ")[1].split(":")[1] + " " + date_obj.toLocaleString('en-US', { timeZone: 'UTC' }).split(" ")[2];
                date_string = date_string + " at " + time_string;
                confirmAppointment("Appointment booked with " + shop.shop_name + " on " + date_string + ". View details at " + APPOINTMENT_SHOW_URL + res.id);
            });
    }

    const confirmAppointment = (confirmation_message) => {
        confirmAlert({
            title: 'Appointment confirmed!',
            message: confirmation_message,
            buttons: [
                {
                    label: 'Return to home',
                    onClick: () => window.location = '/'
                }
            ]
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        const formData = new FormData(event.target);
        createCustomer(formData);
    }

    return (
        <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
            <div className="jumbotron jumbotron-fluid bg-transparent">
                <div className="container secondary-color">
                    <h1 className="display-4">Garagio</h1>
                    <p className="lead">{"Finalize your appointment with " + shop.shop_name + " and choose your prefered appointment slot!"}</p>
                    <hr className="my-4" />
                    <div className="container">
                        <form onSubmit={handleSubmit}>
                            <label>
                                <p>Name</p>
                                <input type="text" name="name" required />
                            </label>
                            &nbsp;
                            <label>
                                <p>Email</p>
                                <input type="text" name="email" required />
                            </label>
                            &nbsp;
                            <label>
                                <p>Phone</p>
                                <PhoneInput name='phone' required />
                            </label>
                            &nbsp;
                            <label>
                                <p>Preferred Appointment Date &amp; Time</p>
                                <input type="datetime-local" name="appointment_datetime" required />
                            </label>
                            &nbsp;
                            &nbsp;

                            <button className="btn btn-lg custom-button" style={{ position: "relative", bottom: "13px", left: "13px" }} type="submit">Submit</button>

                            <div>
                            </div>
                        </form>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default FinalizeAppointment
