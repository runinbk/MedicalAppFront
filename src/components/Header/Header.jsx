import React from "react";

import "./Header.css";

const Header = ({ onMenuClick }) => {
  return (
    <header className="header">
      <div className="header-left">
        <button className="menu-button" onClick={onMenuClick}>
          ☰
        </button>
      </div>
      <div className="user-info">
        <span>Sylvia Johnston</span>
        <span className="user-role">Doctor</span>
        <div className="user-avatar">
          <img src="/api/placeholder/32/32" alt="User avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
