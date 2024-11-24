import React, { useEffect } from "react";

const CreateDoctorModal = ({ isOpen, onClose, doctorInfo }) => {
  console.log(doctorInfo);

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
          <h2>Crear Doctor</h2>
          <button className="close-button" onClick={onClose}>
            ✕
          </button>
        </div>

        <form className="exam-form">
          <div className="form-group">
            <label>Nombre Completo</label>
            <input
              type="text"
              placeholder="Beatriz Morales"
              className="form-input"
            />
          </div>

          <div className="form-row">
            <div className="form-group half">
              <label>Fecha de Nacimiento</label>
              <input type="date" className="form-input" />
            </div>
            <div className="form-group half">
              <label>Tipo de Sangre</label>
              <select className="form-input">
                <option value="">Seleccionar</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group half">
              <label>DNI</label>
              <input
                type="text"
                placeholder="9876543210"
                className="form-input"
              />
            </div>
            <div className="form-group half">
              <label>Teléfono</label>
              <input
                type="tel"
                placeholder="9876543210"
                className="form-input"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group half">
              <label>Correo Electronico</label>
              <input
                type="email"
                placeholder="ejemplo@gmail.com"
                className="form-input"
              />
            </div>
          </div>

          <button type="submit" className="submit-button">
            Guardar
          </button>

          <p className="verify-text">Verifica que los datos sean correctos</p>
        </form>
      </div>
    </div>
  );
};
export default CreateDoctorModal;
