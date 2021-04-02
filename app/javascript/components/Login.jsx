import React from 'react'
import Footer from './Footer'

const Login = () => {
    return (
        <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
            <div className="jumbotron jumbotron-fluid bg-transparent">
                <div className="container secondary-color">
                <h1 className="display-4">Shop Owner Login</h1>
                <hr className="my-4" />
                <div className="container">
                    <form>
                        <label>
                            <p>Username</p>
                            <input type="text"/>
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
