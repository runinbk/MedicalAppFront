import React, { useState } from "react";

import "./styles/RevisionResult.css";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";

const RevisionResult = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const resultData = {
    codigo: "218056424",
    fecha: "20/08/2024",
    paciente: "Marcelo Martinez",
    areasObservar:
      "Se encontraron irregularidades a observar en las siguientes áreas: Tórax, pulmón derecho, 5ta costilla derecha.",
    diagnosticoIA:
      "De acuerdo a las irregularidades encontradas, el paciente femenino de 25 años de edad tiene un absceso en el pulmón derecho bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla.",
  };

  return (
    <div className="app">
      <Sidebar isOpen={isSidebarOpen} />
      <div className={`main-content ${!isSidebarOpen ? "expanded" : ""}`}>
        <Header onMenuClick={toggleSidebar} />
        <div className="revision-result-container">
          <div className="page-header">
            <h1>Resultados</h1>
            <button className="save-button">
              <span className="check-icon">✓</span>
              Guardar
            </button>
          </div>

          <div className="result-content">
            <div className="tab-container-revision">
              <button className="tab-revision active">Revisión con IA</button>
            </div>

            <div className="result-card">
              <div className="result-grid">
                <div className="main-content-area">
                  <section className="observation-section">
                    <h2>Areas a observar</h2>
                    <p>
                      Se encontraron irregularidades a observar en las
                      siguientes áreas: Tórax, pulmón derecho, 5ta costilla
                      derecha.
                    </p>
                  </section>

                  <section className="diagnosis-section">
                    <h2>Diagnóstico de la IA</h2>
                    <p>
                      De acuerdo a las irregularidades encontradas, el paciente
                      femenino de 25 años de edad tiene un absceso en el pulmón
                      derecho bla bla bla bla bla bla bla bla bla bla bla bla
                      bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                      bla bla bla.
                    </p>
                  </section>

                  <section className="write-diagnosis-section">
                    <h2>Escribe tu diagnóstico</h2>
                    <textarea className="diagnosis-textarea" rows={8} />
                  </section>
                </div>

                <div className="info-sidebar">
                  <div className="info-item">
                    <span className="info-label">Código</span>
                    <span className="info-value">218056424</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Fecha</span>
                    <span className="info-value">20/08/2024</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Paciente</span>
                    <span className="info-value">Marcelo Martinz</span>
                  </div>
                </div>
              </div>

              <div className="action-buttons">
                <button className="view-button">
                  <span className="document-icon">📄</span>
                  Ver Radiografía Original
                </button>
                <button className="view-button">
                  <span className="document-icon">📄</span>
                  Ver Radiografía Marcada
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevisionResult;
