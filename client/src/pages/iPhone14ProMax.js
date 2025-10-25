import React from "react";
import "./ProductDetails.css";

const product = {
  name: "iPhone 14 Pro Max",
  brand: "Apple",
  price: "₹1,29,900",
  rating: 4.8,
  inStock: true,
  description: "The latest flagship iPhone with A16 Bionic chip and Dynamic Island design.",
  images: ["/assets/iPhone_14_Pro_Max.jpg", "/assets/iphone_side.jpg", "/assets/iphone_back.jpg"],
};

function iPhone14ProMax() {
  return (
    <div className="product-page container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img src={product.images[0]} alt={product.name} className="img-fluid rounded" />
          <div className="image-gallery d-flex gap-2 mt-3">
            {product.images.map((img, i) => (
              <img key={i} src={img} alt={`View ${i + 1}`} className="thumb-img" />
            ))}
          </div>
        </div>
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <h5 className="text-muted">by {product.brand}</h5>
          <p className="text-warning">★ {product.rating} / 5</p>
          <h3 className="text-success">{product.price}</h3>
          <p className="mt-3">{product.description}</p>
          <p><strong>Status:</strong> <span className="text-success">In Stock</span></p>
          <div className="btn-group mt-4 w-100">
            <button className="btn btn-primary me-2 w-50">Add to Cart</button>
            <button className="btn btn-success w-50">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default iPhone14ProMax;