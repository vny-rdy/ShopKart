import React, { useState } from 'react';
import { Footer, Navbar } from "../components";
import { Link } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const Register = () => {
    const clientId = "799925710568-3cftc3pv6b6fa1o9b81s9o5autelhaj0.apps.googleusercontent.com";

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Simple form validation
        if (!formData.name || !formData.email || !formData.password) {
            setError('Please fill in all fields.');
            return;
        }

        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            setError('Please enter a valid email address.');
            return;
        }

        setError('');

        // Send data to the backend or handle registration logic
        console.log("Registering user:", formData);

        try {
            // Replace with your backend API endpoint
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                console.log("User registered successfully");
                // Redirect to login or another page
            } else {
                console.error("Failed to register user");
            }
        } catch (error) {
            console.error("An error occurred during registration:", error);
        }
    };

    const handleGoogleSuccess = (credentialResponse) => {
        console.log("Google Credential Response:", credentialResponse);
        // Send `credentialResponse.credential` to your backend for validation
    };

    const handleGoogleFailure = () => {
        console.error("Google Login Failed");
    };

    return (
        <GoogleOAuthProvider clientId={clientId}>
            <Navbar />
            <div className="container my-3 py-3">
                <h1 className="text-center">Register</h1>
                <hr />
                <div className="row my-4 h-100">
                    <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                        <form onSubmit={handleSubmit}>
                            <div className="form my-3">
                                <label htmlFor="name">Full Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Enter Your Name"
                                />
                            </div>
                            <div className="form my-3">
                                <label htmlFor="email">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="name@example.com"
                                />
                            </div>
                            <div className="form my-3">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    placeholder="Password"
                                />
                            </div>
                            {error && <p className="text-danger">{error}</p>}
                            <div className="my-3">
                                <p>
                                    Already have an account?{" "}
                                    <Link to="/login" className="text-decoration-underline text-info">
                                        Login
                                    </Link>
                                </p>
                            </div>
                            <div className="text-center">
                                <button className="my-2 mx-auto btn btn-dark" type="submit">
                                    Register
                                </button>
                            </div>
                        </form>
                        <div className="text-center my-4">
                            <GoogleLogin
                                onSuccess={handleGoogleSuccess}
                                onError={handleGoogleFailure}
                                useOneTap
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </GoogleOAuthProvider>
    );
};

export default Register;
