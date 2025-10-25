import React from "react";
import "./Subscribe.css";

function Subscribe() {
  return (
    <section className="subscribe-section py-5 text-center text-white">
      <div className="container">
        <h2 className="mb-3 fw-bold">📬 Stay Updated with Gadget Avenue</h2>
        <p className="mb-4">Get exclusive offers, product updates, and more delivered to your inbox!</p>

        <form className="subscribe-form d-flex flex-column flex-md-row justify-content-center align-items-center gap-3">
          <input
            type="email"
            className="form-control w-100 w-md-50"
            placeholder="Enter your email address"
            required
          />
          <button type="submit" className="btn btn-warning text-dark fw-semibold px-4 py-2">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

export default Subscribe;