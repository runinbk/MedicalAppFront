import React, { useEffect } from "react";
import "./AddExamModal.css";

const AddExamModal = ({ isOpen, onClose, examData }) => {
  if (examData) {
    console.log(examData);
  }

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      onClick={(e) => e.target.className === "modal-overlay" && onClose()}
    >
      <div className={`modal-container ${isOpen ? "modal-enter" : ""}`}>
        <div className="modal-header">
          <h2>Agregar Historia Clínica</h2>
          <button className="close-button" onClick={onClose}>
            ✕
          </button>
        </div>

        <form className="exam-form">
          <div className="form-group">
            <label>Examen</label>
            <input
              type="text"
              placeholder="Análisis de Sangre"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label>Doctor</label>
            <input
              type="text"
              placeholder="Jose Kenedy"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label>Hospital</label>
            <input
              type="text"
              placeholder="San Juan de Dios"
              className="form-input"
            />
          </div>

          <div className="form-row">
            <div className="form-group half">
              <label>Fecha</label>
              <input
                type="text"
                placeholder="DD/MM/YY"
                className="form-input"
              />
            </div>
            <div className="form-group half">
              <label>Código H.C</label>
              <input
                type="text"
                placeholder="715923541"
                className="form-input"
              />
            </div>
          </div>

          <div className="form-group">
            <label>Sube fotos de la Historia Clínica</label>
            <div className="upload-grid">
              <div className="upload-box">
                <span className="upload-icon">+</span>
              </div>
              <div className="upload-box">
                <span className="upload-icon">+</span>
              </div>
              <div className="upload-box">
                <span className="upload-icon">+</span>
              </div>
              <div className="upload-box">
                <span className="upload-icon">+</span>
              </div>
            </div>
          </div>

          <button type="submit" className="submit-button">
            Guardar Historia
          </button>

          <p className="verify-text">Verifica que los datos sean correctos</p>
        </form>
      </div>
    </div>
  );
};

export default AddExamModal;
