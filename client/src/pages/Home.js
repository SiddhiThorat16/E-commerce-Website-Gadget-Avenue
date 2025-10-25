// import React from "react";
import "./Home.css";
import FeaturedCategories from "../components/FeaturedCategories";
import BestSellers from "../components/BestSellers";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import Subscribe from "../components/Subscribe";
import Footer from "./Footer";


function Home() {
  return (
    <div className="homepage">

      {/* HERO SECTION */}
      <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2500">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="../assets/Hero_Section_1.jpg" className="d-block w-100 hero-img" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h1>Welcome to Gadget Avenue</h1>
              <p>Discover latest gadgets at unbeatable prices</p>
              <a className="btn btn-primary" href="/products">Shop Now</a>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2500">
            <img src="../assets/Hero_Section_2.jpg" className="d-block w-100 hero-img" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h1>Gear Up with the Best</h1>
              <p>From audio to photography—get your hands on must-have gadgets.</p>
              <a className="btn btn-light text-dark" href="/products">Browse Deals</a>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2500">
            <img src="../assets/Hero_Section_3.jpg" className="d-block w-100 hero-img" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h1>Level Up Your Workspace</h1>
              <p>Find cutting-edge tools to boost your productivity.</p>
              <a className="btn btn-light text-dark" href="/products">Snag Now</a>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      <FeaturedCategories />
      <BestSellers />
      <WhyChooseUs />
      <Testimonials />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default Home;