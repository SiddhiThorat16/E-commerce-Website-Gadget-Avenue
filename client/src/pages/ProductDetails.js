import React from "react";
import { useParams } from "react-router-dom";
import mobiles from "./MobileProducts";
import laptops from "./LaptopProducts";
import headphones from "./HeadphoneProducts";
import cables from "./CableProducts";

function ProductDetail() {
  const { productName } = useParams();

  const allProducts = [...mobiles, ...laptops, ...headphones, ...cables];
  const product = allProducts.find(
    (item) => item.name.toLowerCase().replace(/\s+/g, "-") === productName
  );

  if (!product) {
    return <h2 className="text-center mt-5">Product Not Found</h2>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} alt={product.name} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <p className="fs-4">{product.price}</p>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;