import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value.trim() });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    console.log("Sending login formData:", formData);

    const res = await axios.post("http://localhost:5000/api/auth/login", formData);

    alert(res.data.message); // "Login successful"
    navigate("/"); // Redirect to homepage
  } catch (err) {
    console.error("Login error:", err);
    if (err.response && err.response.data && err.response.data.error) {
      alert(err.response.data.error);
    } else {
      alert("Login failed. Please try again.");
    }
  }
};

  return (
    <div className="login-container">
      <div className="login-card shadow-lg">
        <h2 className="login-title">Welcome Back</h2>
        <p className="login-subtitle">Login to continue shopping with Gadget Avenue</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="you@example.com"
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group mb-4">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
        <p className="text-center mt-3">Don't have an account? <a href="/register">Register</a></p>
      </div>
    </div>
  );
}

export default Login;
