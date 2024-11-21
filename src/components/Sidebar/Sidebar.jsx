import React from "react";
import "./SideBar.css";

import { Link } from "react-router-dom";

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`sidebar ${!isOpen ? "hidden" : ""}`}>
      <div className="logo">Menu</div>
      <nav>
        <ul>
          <li>
            <a href="#" className="nav-item">
              <span className="icon">🏠</span>
              Inicio
            </a>
          </li>
          <li>
            <Link to="/pacientes" className="nav-item active">
              <span className="icon">👥</span>
              Pacientes
            </Link>
          </li>
          <li>
            <Link to="/revision" className="nav-item">
              <span className="icon">📋</span>
              Hacer Revisión
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
