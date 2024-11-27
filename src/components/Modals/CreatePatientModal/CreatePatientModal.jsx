import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { postPaciente } from "../../../actions/paciente";

const CreatePatientModal = ({ isOpen, onClose, postPaciente, paciente }) => {
  const initialState = {
    nombre: "",
    edad: "",
    sexo: "",
    direccion: "",
    telefono: "",
    email: "",
    alergias: "",
    condiciones_cronicas: "",
    cirugias_pasadas: "",
    fecha_nacimiento: "",
    tipo_sangre: "",
    dni: "",
  };

  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (paciente) {
      setFormData({
        nombre: paciente.nombre || "",
        edad: paciente.edad || "",
        sexo: paciente.sexo || "",
        direccion: paciente.direccion || "",
        telefono: paciente.telefono || "",
        email: paciente.email || "",
        alergias: paciente.alergias || "",
        condiciones_cronicas: paciente.condiciones_cronicas || "",
        cirugias_pasadas: paciente.cirugias_pasadas || "",
        fecha_nacimiento: paciente.fecha_nacimiento || "",
        tipo_sangre: paciente.tipo_sangre || "",
        dni: paciente.dni || "",
      });
    } else {
      setFormData(initialState);
    }
  }, [paciente]);

  const {
    nombre,
    edad,
    sexo,
    direccion,
    telefono,
    email,
    alergias,
    condiciones_cronicas,
    cirugias_pasadas,
    fecha_nacimiento,
    tipo_sangre,
    dni,
  } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postPaciente(formData);
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
          <h2>{!paciente ? "Crear Paciente" : "Actualizar Paciente"}</h2>
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
              placeholder="Juan Pérez"
              className="form-input"
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group half">
              <label>Fecha de Nacimiento</label>
              <input
                type="date"
                name="fecha_nacimiento"
                value={fecha_nacimiento}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
            <div className="form-group half">
              <label>Edad</label>
              <input
                type="number"
                name="edad"
                value={edad}
                onChange={handleChange}
                placeholder="35"
                className="form-input"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group half">
              <label>Sexo</label>
              <select
                name="sexo"
                value={sexo}
                onChange={handleChange}
                className="form-input"
                required
              >
                <option value="">Seleccionar</option>
                <option value="M">Masculino</option>
                <option value="F">Femenino</option>
              </select>
            </div>
            <div className="form-group half">
              <label>Tipo de Sangre</label>
              <select
                name="tipo_sangre"
                value={tipo_sangre}
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
                placeholder="123-456-7890"
                className="form-input"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group half">
              <label>Correo Electrónico</label>
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
              <label>Dirección</label>
              <input
                type="text"
                name="direccion"
                value={direccion}
                onChange={handleChange}
                placeholder="Av. Principal 123"
                className="form-input"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Alergias</label>
            <textarea
              name="alergias"
              value={alergias}
              onChange={handleChange}
              placeholder="Detalles de alergias"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label>Condiciones Crónicas</label>
            <textarea
              name="condiciones_cronicas"
              value={condiciones_cronicas}
              onChange={handleChange}
              placeholder="Detalles de condiciones crónicas"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label>Cirugías Pasadas</label>
            <textarea
              name="cirugias_pasadas"
              value={cirugias_pasadas}
              onChange={handleChange}
              placeholder="Historial de cirugías"
              className="form-input"
            />
          </div>

          <button type="submit" className="submit-button">
            {!paciente ? "Crear Paciente" : "Actualizar Paciente"}
          </button>

          <p className="verify-text">Verifica que los datos sean correctos</p>
        </form>
      </div>
    </div>
  );
};

CreatePatientModal.propTypes = {
  postPaciente: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { postPaciente })(CreatePatientModal);
