import "./BestSellers.css";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import React, { useContext } from "react";

const products = [
  {
    id: 1,
    title: "iPhone 14 Pro Max",
    price: "₹1,29,900",
    image: "../assets/iPhone_14_Pro_Max.jpg",
  },
  {
    id: 2,
    title: "Samsung Galaxy S23",
    price: "₹74,999",
    image: "../assets/Samsung_Galaxy_S23.jpg",
  },
  {
    id: 3,
    title: "Dell XPS 13",
    price: "₹1,29,000",
    image: "../assets/Dell_XPS_13.jfif",
  },
  {
    id: 4,
    title: "Sony WH-1000XM5",
    price: "₹29,990",
    image: "../assets/Sony WH-1000XM5.jpg",
  },
];

function BestSellers() {
  const { addToCart } = useContext(CartContext);
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">🔥 Best Sellers</h2>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-3 mb-4" key={product.id}>
            <div className="card h-100 shadow-sm">
              <img src={product.image} className="card-img-top" alt={product.title} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text text-success fw-bold">{product.price}</p>
                <div className="mt-auto d-flex justify-content-between">
                  <button className="btn btn-secondary w-100 mb-2" onClick={() => addToCart(BestSellers)}> Add to Cart </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestSellers;
