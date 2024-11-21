import React from "react";

const HistoricClinicCard = ({ exam }) => {
  return (
    <div className="exam-card">
      <div className="exam-details">
        <div className="flex exam-title">
          <div className="flex">
            <div className="exam-label">Examen</div>
            <div className="exam-value">{exam.name}</div>
          </div>
          <div className="flex">
            <div>
              <p className="exam-date">{exam.date}</p>
            </div>
            <button className="view-button-exam">
              <span className="view-icon-exam">👁️</span>
            </button>
          </div>
        </div>
        <div className="exam-row">
          <div className="exam-label">Doctor</div>
          <div className="exam-value">{exam.doctor}</div>
        </div>
        <div className="exam-row">
          <div className="exam-label">Codigo :</div>
          <div className="exam-value">{exam.codigo}</div>
        </div>
        <div className="exam-row">
          <div className="exam-label">Hospital :</div>
          <div className="exam-value">{exam.hospital}</div>
        </div>
      </div>
    </div>
  );
};

export default HistoricClinicCard;
