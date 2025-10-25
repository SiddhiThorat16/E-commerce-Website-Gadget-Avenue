import React, { useContext } from "react";
import "./Products.css";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const mobiles = [
  {
    id: 1,
    name: "iPhone 14 Pro Max",
    price: "₹1,29,900",
    image: "../assets/iPhone_14_Pro_Max.jpg",
  },
  {
    id: 2,
    name: "Samsung Galaxy S23",
    price: "₹79,999",
    image: "../assets/Samsung_Galaxy_S23.jpg",
  },
  {
    id: 3,
    name: "OnePlus 11R",
    price: "₹44,999",
    image: "../assets/OnePlus_11R.png",
  },
  {
    id: 4,
    name: "Realme Narzo 60",
    price: "₹17,999",
    image: "../assets/Realme_Narzo_60.jfif",
  },
  {
    id: 5,
    name: "Google Pixel 7 Pro",
    price: "₹84,999",
    image: "../assets/Google_Pixel_7_Pro.jfif",
  },
  {
    id: 6,
    name: "Motorola Edge 40",
    price: "₹29,999",
    image: "../assets/Motorola_Edge_40.jfif",
  },
  {
    id: 7,
    name: "Vivo X90 Pro",
    price: "₹84,999",
    image: "../assets/Vivo_X90_Pro.jfif",
  },
  {
    id: 8,
    name: "Xiaomi 13 Pro",
    price: "₹79,999",
    image: "../assets/Xiaomi_13_Pro.jfif",
  },
  {
    id: 9,
    name: "iQOO Neo 7 Pro",
    price: "₹34,999",
    image: "../assets/iQOO_Neo_7_Pro.jfif",
  },
  {
    id: 10,
    name: "Nothing Phone (2)",
    price: "₹44,999",
    image: "../assets/Nothing_Phone_2.jfif",
  },
  {
    id: 11,
    name: "Infinix Zero 5G",
    price: "₹15,999",
    image: "../assets/Infinix_Zero_5G.jfif",
  },
  {
    id: 12,
    name: "POCO X5 Pro",
    price: "₹22,999",
    image: "../assets/POCO_X5_Pro.jfif",
  },
];

function MobileProducts() {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate("/payment");
  };

  const handleImageClick = (name) => {
    // Convert name to route-friendly path
    const route = name.toLowerCase().replace(/[\s()]+/g, "").replace(/[^a-z0-9]/gi, '');
    navigate(`/${route}`);
  };

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">Mobile Phones</h2>
      <div className="row">
        {mobiles.map((mobile) => (
          <div className="col-md-3 mb-4" key={mobile.id}>
            <div className="card h-100 shadow-sm">
              <img
                src={mobile.image}
                className="card-img-top"
                alt={mobile.name}
                style={{ cursor: "pointer" }}
                onClick={() => handleImageClick(mobile.name)}
              />
              <div className="card-body">
                <h5 className="card-title">{mobile.name}</h5>
                <p className="card-text">{mobile.price}</p>
                <button
                  className="btn btn-secondary w-100 mb-2"
                  onClick={() => addToCart(mobile)}
                >
                  Add to Cart
                </button>
                <button className="btn btn-primary w-100" onClick={handleBuyNow}>
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MobileProducts;
