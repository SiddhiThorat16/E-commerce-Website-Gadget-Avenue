import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import Orders from "./pages/Orders";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import MobileProducts from "./pages/MobileProducts";
import LaptopProducts from "./pages/LaptopProducts";
import HeadphoneProducts from "./pages/HeadphoneProducts";
import CableProducts from "./pages/CableProducts";
import SearchBar from "./components/Searchbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:productName" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/about" element={<About />} />
        <Route path="/mobiles" element={<MobileProducts />} />
        <Route path="/laptops" element={<LaptopProducts />} />
        <Route path="/headphones" element={<HeadphoneProducts />} />
        <Route path="/cables" element={<CableProducts />} />
        <Route path="/iphone14promax" element={<iPhone14ProMax />} />
        <Route path="/searchbar" element={<SearchBar />} />
      </Routes>
    </>
  );
}

export default App;
