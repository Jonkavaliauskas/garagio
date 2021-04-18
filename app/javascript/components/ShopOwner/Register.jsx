import React from 'react'
import { useHistory } from "react-router-dom";
import Footer from '../Footer'

const Register = () => {
    const USER_URL = "http://localhost:3000/api/v1/shop_owners/index"

    let history = useHistory();

    const submitPost = (formData) => {
        const data = {
            email: formData.get("email"),
            address: formData.get("address"),
            shop_name: formData.get("shop_name")
        }

        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }

        fetch(USER_URL, configObj)
            .then(res => res.json())
            .then(res => {
                if (res.success == false) {
                    window.location.reload();
                }
                else {
                    history.push('/dashboard', {
                        shopOwnerId: res.id
                    })
                }
            });
    }

    const handleSubmit = event => {
        event.preventDefault();
        const formData = new FormData(event.target);
        submitPost(formData);
    }

    return (
        <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
            <div className="jumbotron jumbotron-fluid bg-transparent">
                <div className="container secondary-color">
                    <h1 className="display-4">Register a New Shop</h1>
                    <hr className="my-4" />
                    <div className="container">
                        <form onSubmit={handleSubmit}>
                            <label>
                                <p>Shop Name</p>
                                <input type="text" name="shop_name" />
                            </label>
                            &nbsp;
                            <label>
                                <p>Address</p>
                                <input type="text" name="address" />
                            </label>
                            &nbsp;
                            <label>
                                <p>Email</p>
                                <input type="text" name="email" />
                            </label>
                            &nbsp;
                            <label>
                                <p>Password</p>
                                <input type="password" name="password_field" />
                            </label>
                            &nbsp;
                            <label>
                                <p>Confirm Password</p>
                                <input type="password" name="confirm_password_field" />
                            </label>
                            <div>
                                <button className="btn btn-lg custom-button" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />

        </div>
    )
}

export default Register
