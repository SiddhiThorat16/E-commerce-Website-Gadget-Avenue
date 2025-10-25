import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-page container my-5">
      <h1 className="text-center fw-bold mb-4">About Gadget Avenue</h1>

      <div className="row mb-5">
        <div className="col-md-6">
          <img
            src="..\assets\About_Gadget_Avenue.png"
            alt="About Gadget Avenue"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h3>Who We Are</h3>
          <p>
            Gadget Avenue is your ultimate destination for the latest gadgets and electronics.
            Our mission is to provide a seamless and satisfying shopping experience to every tech enthusiast out there.
            We offer a curated selection of smartphones, laptops, accessories, and more—delivered with speed and reliability.

            At Gadget Avenue, we stay ahead of the tech curve so you don’t have to. Whether you’re a student, gamer, working professional, or just someone who loves technology, our wide range of high-quality products is handpicked to meet your unique needs.

            We partner with top global brands to ensure authenticity and competitive pricing. From flagship smartphones and ultra-light laptops to audio gear and smart wearables, we bring innovation right to your doorstep.
          </p>
        </div>
      </div>

      <div className="row text-center mb-5">
        <div className="col-md-4">
          <h4 className="fw-bold">🎯 Our Mission</h4>
          <p>To deliver the most trusted and top-quality tech products to our customers at affordable prices.</p>
        </div>
        <div className="col-md-4">
          <h4 className="fw-bold">🌟 Why Choose Us</h4>
          <p>We combine fast delivery, 24/7 support, and premium gadgets from top brands to ensure satisfaction.</p>
        </div>
        <div className="col-md-4">
          <h4 className="fw-bold">📦 What We Offer</h4>
          <p>Smartphones, laptops, wearables, gaming accessories, and much more—all in one place.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
