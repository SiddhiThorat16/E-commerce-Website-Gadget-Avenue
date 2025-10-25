import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer bg-dark text-white pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">

          {/* Logo and Description */}
          <div className="col-md-4">
            <h4 className="fw-bold">Gadget Avenue</h4>
            <p>Your one-stop destination for all the latest gadgets and electronics.</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="#" className="text-white text-decoration-none">Home</Link></li>
              <li><Link to="/products" className="text-white text-decoration-none">Products</Link></li>
              <li><Link to="/about" className="text-white text-decoration-none">About Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p><i className="bi bi-geo-alt-fill"></i> 123 Tech Street, Mumbai, India</p>
            <p><i className="bi bi-envelope-fill"></i> support@gadgetavenue.com</p>
            <p><i className="bi bi-telephone-fill"></i> +91 98765 43210</p>
          </div>

        </div>

        {/* Bottom line */}
        <div className="text-center mt-4 border-top pt-3">
          <p className="mb-0">&copy; {new Date().getFullYear()} Gadget Avenue. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;