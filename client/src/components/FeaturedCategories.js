// src/components/FeaturedCategories.js
import React from "react";
import { Link } from "react-router-dom";
import "./FeaturedCategories.css";

function FeaturedCategories() {
  const categories = [
    {
      name: "Mobiles",
      img: "../assets/iPhone_14_Pro_Max.jpg",
      link: "../mobiles",
    },
    {
      name: "Laptops",
      img: "../assets/Laptops.jpg",
      link: "../laptops",
    },
    {
      name: "Accessories",
      img: "../assets/Accessories.jpg",
      link: "../headphones",
    },
    {
      name: "Cables",
      img: "../assets/Stuffcool_Type_C_to_C.jpg",
      link: "../cables",
    },
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 fw-bold">Featured Categories</h2>
      <div className="row">
        {categories.map((cat, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card category-card h-100 shadow-sm">
              <img
                src={cat.img}
                className="card-img-top"
                alt={cat.name}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{cat.name}</h5>
                <Link to={cat.link} className="btn btn-primary btn-sm">
                  Traverse
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedCategories;


/*

*/