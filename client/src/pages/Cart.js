import "./Cart.css";
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate, Link } from "react-router-dom";

function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const navigate = useNavigate();
  const handleBuyNow = () => {
    navigate("/payment");
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">🛒 Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <div className="row">
          {cartItems.map(item => (
            <div className="col-md-4 mb-4" key={item.id}>
              <div className="card h-100 shadow-sm">
                <img src={item.image} className="card-img-top" alt={item.name} />
                <div className="card-body">
                  <h5>{item.name}</h5>
                  <p>{item.price}</p>
                  <button className="btn btn-warning w-100 mb-2" onClick={handleBuyNow}>Buy Now</button>
                  <button
                    className="btn btn-danger w-100"
                    onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;