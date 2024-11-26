import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./styles/RevisionResult.css";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";

const ImageModal = ({ isOpen, onClose, image }) => {
  if (!isOpen) return null;

  return (
    <div className="original-modal" onClick={onClose}>
      <div className="original-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="original-modal-close" onClick={onClose}>
          ×
        </button>
        <img
          src={URL.createObjectURL(image)}
          alt="Radiografía Original"
          className="original-modal-image"
        />
      </div>
    </div>
  );
};

const RevisionResult = ({ ia: { currentImage } }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        image={currentImage}
      />
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
                    <p>{resultData.areasObservar}</p>
                  </section>

                  <section className="diagnosis-section">
                    <h2>Diagnóstico de la IA</h2>
                    <p>{resultData.diagnosticoIA}</p>
                  </section>

                  <section className="write-diagnosis-section">
                    <h2>Escribe tu diagnóstico</h2>
                    <textarea className="diagnosis-textarea" rows={8} />
                  </section>
                </div>

                <div className="info-sidebar">
                  <div className="info-item">
                    <span className="info-label">Código</span>
                    <span className="info-value">{resultData.codigo}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Fecha</span>
                    <span className="info-value">{resultData.fecha}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Paciente</span>
                    <span className="info-value">{resultData.paciente}</span>
                  </div>
                </div>
              </div>

              <div className="action-buttons">
                <button
                  className="view-button"
                  onClick={() => setIsModalOpen(true)}
                  disabled={!currentImage}
                >
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

const mapStateToProps = (state) => ({
  ia: state.ia,
});

RevisionResult.propTypes = {
  ia: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(RevisionResult);
