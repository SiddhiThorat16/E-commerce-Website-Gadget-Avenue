import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Searchbar.css';

function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    const q = query.toLowerCase().trim();

    // Navigate to category
    if (q === "mobile" || q === "mobiles") navigate("/mobiles");
    else if (q === "laptop" || q === "laptops") navigate("/laptops");
    else if (q === "headphone" || q === "headphones") navigate("/headphones");
    else if (q === "cable" || q === "cables") navigate("/cables");

    // Navigate to product detail
    else if (q === "iphone 14 pro max") navigate("/product/iphone-14-pro-max");
    else if (q === "samsung galaxy s23") navigate("/product/samsung-galaxy-s23");
    // Add more product mappings here
    else alert("No matching product or category found.");
  };

  return (
    <div className="searchbar d-flex">
      <input
        type="text"
        className="form-control me-2"
        placeholder="Search for products"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="btn custom-search-btn" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;