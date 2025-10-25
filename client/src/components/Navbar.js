import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./Searchbar"; // Add this import
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg sticky-top shadow ${scrolled ? "scrolled" : ""}`}>
      <div className="container-fluid">
        <Link className="navbar-brand text-white fw-bold fs-4" to="/">Gadget Avenue</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Home</Link>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown">
                Products
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/mobiles">Mobiles</Link></li>
                <li><Link className="dropdown-item" to="/laptops">Laptops</Link></li>
                <li className="dropdown-submenu">
                  <a className="dropdown-item dropdown-toggle" href="#">Accessories</a>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/headphones">Headphones</Link></li>
                    <li><Link className="dropdown-item" to="/cables">Cables</Link></li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="/about">About</Link>
            </li>
          </ul>

          {/*  Insert working SearchBar component here */}
          <div className="me-3">
            <SearchBar />
          </div>

          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/cart"><i className="bi bi-cart"></i> Cart</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/login"><i className="bi bi-box-arrow-in-right"></i> Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/register"><i className="bi bi-person-plus"></i> Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
