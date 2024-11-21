import React from "react";
import "./PatientCard.css";

const PatientCard = ({ patient }) => {
  return (
    <div className="patient-card">
      <div className="patient-header">
        <div>
          <h3>{patient.name}</h3>
          <span className="date-tag">{patient.date}</span>
        </div>
        <button className="edit-button">✏️</button>
      </div>
      <div className="patient-info">
        <div className="info-row">
          <span className="label">Grupo Sanguineo:</span>
          <span>{patient.bloodType}</span>
          <span className="label">CI:</span>
          <span>{patient.ci}</span>
        </div>
        <div className="info-row">
          <span className="label">Edad:</span>
          <span>{patient.age} anios</span>
        </div>
        <div className="info-row">
          <span className="label">Phone no:</span>
          <span>{patient.phone}</span>
        </div>
      </div>
    </div>
  );
};

export default PatientCard;
