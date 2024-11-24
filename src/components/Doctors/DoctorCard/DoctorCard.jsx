import React from "react";
import "./DoctorCard.css";

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
          <h3>DR. {doctor.name}</h3>
          <span className="date-tag">{doctor.date}</span>
        </div>
        <button className="edit-button">✏️</button>
      </div>
      <div className="patient-info">
        <div className="info-row">
          <span className="label">Grupo Sanguineo:</span>
          <span>{doctor.bloodType}</span>
          <span className="label">CI:</span>
          <span>{doctor.ci}</span>
        </div>
        <div className="info-row">
          <span className="label">Edad:</span>
          <span>{doctor.age} anios</span>
        </div>
        <div className="info-row">
          <span className="label">Phone no:</span>
          <span>{doctor.phone}</span>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
