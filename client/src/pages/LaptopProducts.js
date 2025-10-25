import React, { useContext } from "react";
import "./Products.css";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom"

const laptops = [
  {
    id: 1,
    name: "MacBook Air M2",
    price: "₹1,14,900",
    image: "../assets/MacBook_Air_M2.jfif",
  },
  {
    id: 2,
    name: "HP Pavilion x360",
    price: "₹69,999",
    image: "../assets/HP_Pavilion_x360.jfif",
  },
  {
    id: 3,
    name: "Dell Inspiron 15",
    price: "₹59,990",
    image: "../assets/Dell_Inspiron_15.jfif",
  },
  {
    id: 4,
    name: "ASUS ROG Strix G15",
    price: "₹1,04,990",
    image: "../assets/ASUS_ROG_Strix_G15.jfif",
  },
  {
    id: 5,
    name: "Lenovo IdeaPad Slim 5",
    price: "₹52,990",
    image: "../assets/Lenovo_IdeaPad_Slim_5.jfif",
  },
  {
    id: 6,
    name: "MSI Modern 14",
    price: "₹57,999",
    image: "../assets/MSI_Modern_14.jfif",
  },
  {
    id: 7,
    name: "Acer Aspire 7",
    price: "₹62,490",
    image: "../assets/Acer_Aspire_7.jfif",
  },
  {
    id: 8,
    name: "LG Gram 16",
    price: "₹1,29,999",
    image: "../assets/LG_Gram_16.jfif",
  },
  {
    id: 9,
    name: "HP Omen 16",
    price: "₹1,39,999",
    image: "../assets/HP_Omen_16.jfif",
  },
  {
    id: 10,
    name: "Apple MacBook Pro M3",
    price: "₹1,89,900",
    image: "../assets/MacBook_Pro_M3.jfif",
  },
  {
    id: 11,
    name: "ASUS ZenBook 14 OLED",
    price: "₹89,990",
    image: "../assets/ASUS_ZenBook_14_OLED.jfif",
  },
  {
    id: 12,
    name: "Lenovo Legion 5 Pro",
    price: "₹1,44,990",
    image: "../assets/Lenovo_Legion_5_Pro.jfif",
  }
];

function LaptopProducts() {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate(); //  For redirecting
  const handleBuyNow = () => {
    navigate("/payment");
  };

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">Laptops</h2>
      <div className="row">
        {laptops.map((laptop) => (
          <div className="col-md-3 mb-4" key={laptop.id}>
            <div className="card h-100 shadow-sm">
              <img
                src={laptop.image}
                className="card-img-top product-img"
                alt={laptop.name}
              />
              <div className="card-body">
                <h5 className="card-title">{laptop.name}</h5>
                <p className="card-text">{laptop.price}</p>
                <button className="btn btn-secondary w-100 mb-2"
                  onClick={() => addToCart(laptop)}> Add to Cart </button>
                <button className="btn btn-primary w-100" onClick={handleBuyNow}>         Buy Now </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LaptopProducts;