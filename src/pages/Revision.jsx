import React, { useState } from "react";

import "./styles/Revision.css";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import PatientSelectionModal from "../components/Modals/PatientSelectionModal/PatientSelectionModal";

const Revision = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSelectPatient = (patient) => {
    console.log("Selected patient:", patient);
    setIsModalOpen(false);
  };
  return (
    <div className="app">
      <PatientSelectionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelectPatient={handleSelectPatient}
      />
      <Sidebar isOpen={isSidebarOpen} />
      <div className={`main-content ${!isSidebarOpen ? "expanded" : ""}`}>
        <Header onMenuClick={toggleSidebar} />
        <div className="revision-container">
          <div className="revision-header">
            <h1>Hacer Revisión</h1>
          </div>

          <div className="revision-tabs">
            <button className="tab active">Revisión con IA</button>
          </div>

          <div className="revision-content">
            <div className="upload-section">
              <div className="upload-area">
                <div className="upload-placeholder">
                  <span className="upload-icon">+</span>
                  <p>Clickee acá para subir una imagen</p>
                </div>
              </div>

              <div className="revision-sidebar">
                <div className="recommendations-card">
                  <h3>Recomendaciones</h3>
                  <p>Recuerda que esta es una aproximación</p>
                  <p>Lee bien el análisis de la IA y luego redacta el tuyo.</p>
                </div>

                <button
                  className="select-patient-btn"
                  onClick={() => setIsModalOpen(true)}
                >
                  <span className="user-icon">👤</span>
                  Seleccionar Paciente
                </button>

                <button className="analyze-btn">
                  <span className="revisar-icon">🔍</span>
                  Analizar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Revision;
