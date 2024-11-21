import React, { useState } from "react";
import "./FilterButton.css";

const FilterButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="filter-container">
      <button className="filter-button" onClick={() => setIsOpen(!isOpen)}>
        <span className="filter-text">Filtrar</span>
        <span className={`filter-icon ${isOpen ? "open" : ""}`}>▼</span>
      </button>

      {isOpen && (
        <div className="filter-dropdown">
          <div className="filter-option">
            <input type="checkbox" id="date" />
            <label htmlFor="date">Por fecha</label>
          </div>
          <div className="filter-option">
            <input type="checkbox" id="name" />
            <label htmlFor="name">Por nombre</label>
          </div>
          <div className="filter-option">
            <input type="checkbox" id="blood" />
            <label htmlFor="blood">Por grupo sanguíneo</label>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterButton;
