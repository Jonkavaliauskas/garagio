import React from 'react'
import { useHistory } from "react-router-dom";
import Footer from './Footer'

const Login = () => {
    const USER_URL = "http://localhost:3000/api/v1/shop_owners/index?email="

    let history = useHistory();

    const submitPost = formData => {
        return fetch(USER_URL + formData.get("email"))
          .then(res => res.json())
          .then(res => {
            history.push('/fakeprofile')
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
                <h1 className="display-4">Shop Owner Login</h1>
                <hr className="my-4" />
                <div className="container">
                    <form onSubmit={handleSubmit}>
                        <label>
                            <p>Email</p>
                            <input type="text" name="email" />
                        </label>
                        <label>
                            <p>Password</p>
                            <input type="password"/>
                        </label>
                        <div>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
                <Footer />
                </div>
            </div>
        </div>
    )
}

export default Login
