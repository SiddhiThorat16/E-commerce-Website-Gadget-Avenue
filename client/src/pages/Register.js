import React, { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  if (formData.password !== formData.confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  try {
    const res = await axios.post("http://localhost:5000/api/auth/register", {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    });

    alert(res.data.message); // "User registered successfully!"
    navigate("/login");
  } catch (err) {
    alert(err.response?.data?.error || "Already User with this E-Mail ID is a member of Gadget Avenue");
  }
};


  return (
    <div className="register-container">
      <div className="register-card shadow-lg">
        <h2 className="register-title">Join Gadget Avenue</h2>
        <p className="register-subtitle">Create your account to start shopping smart</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label>Full Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Your Name"
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group mb-3">
            <label>Email Address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="you@example.com"
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group mb-3">
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

          <div className="form-group mb-4">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">Register</button>
        </form>
        <p className="text-center mt-3">Already have an account? <a href="/login">Login</a></p>
      </div>
    </div>
  );
}

export default Register;