import React from "react";

const RevisionCard = ({ revision }) => {
  return (
    <div className="revision-card">
      <div className="revision-header">
        <div>
          <h3>{revision.type}</h3>
          <span className="date-tag">{revision.date}</span>
        </div>
        <button className="edit-button">✏️</button>
      </div>
      <div className="revision-details">
        <div className="detail-item">
          <label>Doctor</label>
          <span>{revision.doctor}</span>
        </div>
        <div className="detail-item">
          <label>Codigo :</label>
          <span>{revision.codigo}</span>
        </div>
        <div className="detail-item">
          <label>Hospital :</label>
          <span>{revision.hospital}</span>
        </div>
      </div>
    </div>
  );
};

export default RevisionCard;
