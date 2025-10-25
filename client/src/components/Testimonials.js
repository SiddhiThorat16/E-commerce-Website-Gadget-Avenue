import React from "react";
import "./Testimonials.css";
import { FaStar } from "react-icons/fa";

function Testimonials() {
  const reviews = [
    {
      name: "Amit Sharma",
      text: "Amazing quality products and fast delivery. Will shop again!",
      rating: 5
    },
    {
      name: "Sneha Patel",
      text: "Great prices and easy checkout. Love the new phone I got!",
      rating: 4
    },
    {
      name: "Ravi Mehra",
      text: "Customer support was very helpful when I had questions.",
      rating: 4
    },
    {
      name: "Nikita Desai",
      text: "This site made tech shopping super simple. 100% satisfied!",
      rating: 5
    },
    {
      name: "Arjun Khanna",
      text: "Fast shipping and responsive customer care. Recommended!",
      rating: 4
    },
    {
      name: "Meera Joshi",
      text: "User-friendly website with fantastic deals. Will return soon.",
      rating: 5
    },
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="text-center mb-4">What Our Customers Say</h2>
        <div className="row">
          {reviews.map((review, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="testimonial-card">
                <h5>{review.name}</h5>
                <p>"{review.text}"</p>
                <div className="stars">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} color="#ffc107" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
