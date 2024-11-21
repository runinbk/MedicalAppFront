import React from "react";

const SearchBar = () => {
  return (
    <div className="search-container">
      <input type="text" className="search-input" placeholder="Buscar..." />
      <span className="search-icon">🔍</span>
    </div>
  );
};

export default SearchBar;
