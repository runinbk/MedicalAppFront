import React, { useState } from "react";

import "./Styles/home.css";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import PatientList from "../components/Patient/PatientList/PatientList";

const Pacientes = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app">
      <Sidebar isOpen={isSidebarOpen} />
      <div className={`main-content ${!isSidebarOpen ? "expanded" : ""}`}>
        <Header onMenuClick={toggleSidebar} />
        <PatientList />
      </div>
    </div>
  );
};

export default Pacientes;
