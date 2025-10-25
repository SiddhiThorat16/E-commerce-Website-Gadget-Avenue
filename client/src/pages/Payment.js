import React, { useState } from "react";
import loadRazorpayScript from "../utils/loadRazorpay";

function Payment() {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const handlePayment = async () => {
    const res = await loadRazorpayScript("https://checkout.razorpay.com/v1/checkout.js");

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options = {
      key: "rzp_test_KeyHere", // Replace with test key from Razorpay
      amount: 50000, // in paise = ₹500.00
      currency: "INR",
      name: "Gadget Avenue",
      description: "Test Payment",
      handler: function (response) {
        alert("Payment successful!\nTransaction ID: " + response.razorpay_payment_id);
      },
      prefill: {
        name: "Test User",
        email: "test@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Test Payment",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handlePayment();
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Secure Payment</h2>
      <div className="card p-4 mx-auto" style={{ maxWidth: "400px", boxShadow: "0 0 20px rgba(0,0,0,0.1)" }}>
        <h4>Enter Payment Details</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Card Number</label>
            <input
              type="text"
              className="form-control"
              placeholder="1234 5678 9012 3456"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Expiry Date</label>
            <input
              type="text"
              className="form-control"
              placeholder="MM/YY"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="form-label">CVV</label>
            <input
              type="password"
              className="form-control"
              placeholder="•••"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-success w-100">
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default Payment;

/*

*/