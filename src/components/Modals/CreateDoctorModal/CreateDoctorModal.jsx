import React, { useEffect, useState } from "react";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { postDoctor } from "../../../actions/doctor";

const CreateDoctorModal = ({
  isOpen,
  onClose,
  doctorInfo,
  postDoctor,
  doctor: { doctores, error, loading },
}) => {
  const [formData, setFormData] = useState({
    nombre: "",
    fechaNacimiento: "",
    tipoSangre: "",
    dni: "",
    telefono: "",
    email: "",
    especialidad: "",
  });

  const {
    nombre,
    fechaNacimiento,
    tipoSangre,
    dni,
    telefono,
    email,
    especialidad,
  } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postDoctor(formData);
    onClose();
  };

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

        <form className="exam-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nombre Completo</label>
            <input
              type="text"
              name="nombre"
              value={nombre}
              onChange={handleChange}
              placeholder="Beatriz Morales"
              className="form-input"
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group half">
              <label>Fecha de Nacimiento</label>
              <input
                type="date"
                name="fechaNacimiento"
                value={fechaNacimiento}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
            <div className="form-group half">
              <label>Tipo de Sangre</label>
              <select
                name="tipoSangre"
                value={tipoSangre}
                onChange={handleChange}
                className="form-input"
                required
              >
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
                name="dni"
                value={dni}
                onChange={handleChange}
                placeholder="9876543210"
                className="form-input"
                required
              />
            </div>
            <div className="form-group half">
              <label>Teléfono</label>
              <input
                type="tel"
                name="telefono"
                value={telefono}
                onChange={handleChange}
                placeholder="9876543210"
                className="form-input"
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group half">
              <label>Correo Electronico</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="ejemplo@gmail.com"
                className="form-input"
                required
              />
            </div>
            <div className="form-group half">
              <label>Especialidad</label>
              <input
                type="text"
                name="especialidad"
                value={especialidad}
                onChange={handleChange}
                placeholder="cardiologia"
                className="form-input"
                required
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

CreateDoctorModal.propTypes = {
  postDoctor: PropTypes.func.isRequired,
  doctor: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  doctor: state.doctor,
});

export default connect(mapStateToProps, { postDoctor })(CreateDoctorModal);
