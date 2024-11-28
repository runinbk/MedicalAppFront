import React from "react";
import "./DoctorCard.css";
import { formatDate } from "../../../utils/dateFormatter";

const DoctorCard = ({ doctor, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(doctor);
    }
  };
  return (
    <div className="patient-card" onClick={handleClick}>
      <div className="patient-header">
        <div>
          <h3>DR. {doctor.nombre}</h3>
          <span className="date-tag">{formatDate(doctor.createdAt)}</span>
        </div>
        <button className="edit-button">✏️</button>
      </div>
      <div className="patient-info">
        <div className="info-row">
          <span className="label">Codigo:</span>
          <span>{doctor.id}</span>
        </div>
        <div className="info-row">
          <span className="label">Especialidad:</span>
          <span>{doctor.especialidad}</span>
        </div>

        <div className="info-row">
          <span className="label">Email:</span>
          <span>{doctor.email}</span>
        </div>
        <div className="info-row">
          <span className="label">Telefono:</span>
          <span>{doctor.telefono}</span>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
