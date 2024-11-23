import React, { useState } from "react";
import { Footer, Navbar } from "../components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Checkout = () => {
  const state = useSelector((state) => state.handleCart);

  const [billingDetails, setBillingDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    address2: "",
    country: "",
    state: "",
    zip: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setBillingDetails((prevDetails) => ({
      ...prevDetails,
      [id]: value,
    }));
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async (totalAmount) => {
    if (!validateBillingDetails()) {
      alert("Please fill in all required billing details.");
      return;
    }

    const loaded = await loadRazorpayScript();
    if (!loaded) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options = {
      key: "rzp_test_UN7RYbjuHhXEWY", // Replace with your Razorpay test key
      amount: totalAmount * 100, // Amount in paise
      currency: "INR",
      name: "ShopKart",
      description: "Order Payment",
      image: "https://example.com/logo.png", // Optional: Replace with your logo URL
      handler: function (response) {
        alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
      },
      theme: {
        color: "#F37254",
      },
      method: {
        upi: true,
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const validateBillingDetails = () => {
    const { firstName, lastName, email, address, country, state, zip } = billingDetails;
    return firstName && lastName && email && address && country && state && zip;
  };

  const EmptyCart = () => (
    <div className="container">
      <div className="row">
        <div className="col-md-12 py-5 bg-light text-center">
          <h4 className="p-3 display-5">No item in Cart</h4>
          <Link to="/" className="btn btn-outline-dark mx-4">
            <i className="fa fa-arrow-left"></i> Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );

  const ShowCheckout = () => {
    let subtotal = 0;
    let shipping = 30.0;
    let totalItems = 0;

    state.map((item) => (subtotal += item.price * item.qty));
    state.map((item) => (totalItems += item.qty));

    return (
      <>
        <div className="container py-5">
          <div className="row my-4">
            <div className="col-md-5 col-lg-4 order-md-last">
              <div className="card mb-4">
                <div className="card-header py-3 bg-light">
                  <h5 className="mb-0">Order Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Products ({totalItems})<span>₹{Math.round(subtotal)}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Shipping<span>₹{shipping}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                      </div>
                      <span>
                        <strong>₹{Math.round(subtotal + shipping)}</strong>
                      </span>
                    </li>
                  </ul>
                  <button
                    className="btn btn-primary w-100 mt-3"
                    onClick={() => handlePayment(Math.round(subtotal + shipping))}
                  >
                    Pay Now
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-lg-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h4 className="mb-0">Billing address</h4>
                </div>
                <div className="card-body">
                  <form className="needs-validation" noValidate>
                    <div className="row g-3">
                      {[
                        { id: "firstName", label: "First Name" },
                        { id: "lastName", label: "Last Name" },
                        { id: "email", label: "Email", type: "email" },
                        { id: "address", label: "Address" },
                        { id: "address2", label: "Address 2 (Optional)", optional: true },
                        { id: "country", label: "Country" },
                        { id: "state", label: "State" },
                        { id: "zip", label: "Zip" },
                      ].map(({ id, label, type = "text", optional }) => (
                        <div className={`col-sm-6 my-1`} key={id}>
                          <label htmlFor={id} className="form-label">
                            {label} {!optional && <span className="text-danger">*</span>}
                          </label>
                          <input
                            type={type}
                            className="form-control"
                            id={id}
                            value={billingDetails[id]}
                            onChange={handleInputChange}
                            required={!optional}
                          />
                        </div>
                      ))}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Checkout</h1>
        <hr />
        {state.length ? <ShowCheckout /> : <EmptyCart />}
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
