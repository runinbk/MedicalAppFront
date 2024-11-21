import React from "react";

const Search = () => {
  return (
    <div className="search-controls">
      <div className="search-bar">
        <input type="text" placeholder="Buscar..." />
        <span className="search-icon">🔍</span>
      </div>
      <button className="filter-button">
        <span className="filter-icon">⚡</span>
        Filtrar
      </button>
    </div>
  );
};

export default Search;
