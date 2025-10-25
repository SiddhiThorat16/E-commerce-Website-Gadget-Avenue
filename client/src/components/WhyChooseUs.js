// src/components/WhyChooseUs.js
import "./WhyChooseUs.css";
import { FaTruck, FaShieldAlt, FaHeadset, FaUndo } from "react-icons/fa";

function WhyChooseUs() {
  return (
    <section className="why-choose-us py-5 bg-light text-center">
      <div className="container">
        <h2 className="mb-4">Why Shop with Gadget Avenue?</h2>
        <div className="row">
          <div className="col-md-3">
            <FaTruck size={50} className="mb-3 text-primary" />
            <h5>Fast Delivery</h5>
            <p>Get your gadgets delivered to your doorstep quickly and safely.</p>
          </div>
          <div className="col-md-3">
            <FaShieldAlt size={50} className="mb-3 text-primary" />
            <h5>Secure Payments</h5>
            <p>100% secure payments via trusted gateways.</p>
          </div>
          <div className="col-md-3">
            <FaHeadset size={50} className="mb-3 text-primary" />
            <h5>24/7 Support</h5>
            <p>Need help? We're here anytime you need assistance.</p>
          </div>
          <div className="col-md-3">
            <FaUndo size={50} className="mb-3 text-primary" />
            <h5>Easy Returns</h5>
            <p>Not satisfied? Return or exchange hassle-free.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
