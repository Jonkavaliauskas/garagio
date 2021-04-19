import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";
import Footer from '../Footer'

import { AuthContext } from '../../contexts/auth';

// const AUTHENTICATE_URL = "http://localhost:3000/api/v1/authenticate" //"http://localhost:3000/api/v1/shop_owners/index?email="

// async function loginUser(credentials) {
//     return fetch(AUTHENTICATE_URL, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(credentials)
//     }).then(res => res.json());
// } 

const Login = () => {
    let history = useHistory();

    const authContext = useContext(AuthContext);

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    // const submitPost = (formData) => {
    //     fetch(USER_URL + formData.get("email"))
    //         .then(res => res.json())
    //         .then(res => {
    //             if (res.success == false) {
    //                 window.location.reload();
    //             }
    //             else {
    //                 history.push('/dashboard', {
    //                     shopOwnerId: res.id
    //                 })
    //             }
    //         });
    // }


    const handleSubmit = async event => {
        event.preventDefault();

        const success = await authContext.login(email, password);

        if (success)
            history.push('/dashboard');
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
                                <input type="text" onChange={e => setEmail(e.target.value)} required />
                            </label>
                            &nbsp;&nbsp;
                            <label>
                                <p>Password</p>
                                <input type="password" onChange={e => setPassword(e.target.value)} required />
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
    );
}

export default Login
