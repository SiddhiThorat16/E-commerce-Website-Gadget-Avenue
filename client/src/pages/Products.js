// src/pages/Products.js

import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Products.css"; // Reuse your CSS or extend

function Products() {

  const products = [
    {
      name: "iPhone 14 Pro Max",
      price: "₹1,29,900",
      image: "../assets/iPhone_14_Pro_Max.jpg",
      description: "The most powerful iPhone ever with A16 Bionic chip and Dynamic Island.",
      rating: 4.9,
    },
    {
      name: "Samsung Galaxy S23",
      price: "₹74,999",
      image: "../assets/Samsung_Galaxy_S23.jpg",
      description: "Flagship Android phone with Snapdragon 8 Gen 2 and stunning display.",
      rating: 4.7,
    },
    {
      name: "Dell XPS 13",
      price: "₹1,29,000",
      image: "../assets/Dell_XPS_13.jfif",
      description: "Ultra-portable laptop with InfinityEdge display and premium aluminum build.",
      rating: 4.8,
    },
    {
      name: "Sony WH-1000XM5",
      price: "₹29,990",
      image: "../assets/Sony_WH_1000XM5.webp",
      description: "Industry-leading noise cancellation with immersive sound and 30hr battery life.",
      rating: 4.6,
    },
  ];

  const categories = [
    { name: "Mobiles", link: "/mobiles", img: "../assets/Vivo_X90_Pro.jfif" },
    { name: "Laptops", link: "/laptops", img: "../assets/Lenovo_IdeaPad_Slim_5.jfif" },
    { name: "Headphones", link: "/headphones", img: "../assets/Realme_Buds_Wireless_3.png" },
    { name: "Cables", link: "/cables", img: "../assets/Stuffcool_Type_C_to_C.jpg" },
  ];

  const navigate = useNavigate();
  const handleBuyNow = () => {
    navigate("/payment");
  };

  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-5">Trending Products</h2>
      <div className="row">
        {products.map((prod, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="card h-100 shadow-lg border-0">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="img-fluid rounded-start"
                    style={{ height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{prod.name}</h5>
                    <p className="text-muted">{prod.description}</p>
                    <p className="text-success fs-5 fw-semibold">{prod.price}</p>
                    <p className="text-warning">★ {prod.rating} / 5</p>
                    <button className="btn btn-primary" onClick={handleBuyNow}>
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="my-5" />
      <h3 className="text-center fw-bold mb-4">Explore More Products</h3>
      <div className="row">
        {categories.map((cat, idx) => (
          <div className="col-md-3 mb-4" key={idx}>
            <div className="card h-100 shadow-sm category-card border-0">
              <img
                src={cat.img}
                alt={cat.name}
                className="card-img-top"
                style={{ height: "180px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{cat.name}</h5>
                <Link to={cat.link} className="btn btn-outline-primary">
                  Explore
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
