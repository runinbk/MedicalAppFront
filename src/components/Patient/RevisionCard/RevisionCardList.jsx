import React from "react";
import RevisionCard from "./RevisionCard";

const RevisionCardList = () => {
  const revisions = [
    {
      type: "Radiografía Torax",
      date: "07-08-2024",
      doctor: "Jose Kennedy",
      codigo: "09898989898",
      hospital: "Jose Kennedy Hospital",
    },
    {
      type: "Radiografía Torax",
      date: "07-08-2024",
      doctor: "Jose Kennedy",
      codigo: "09898989898",
      hospital: "Jose Kennedy Hospital",
    },
    {
      type: "Radiografía Torax",
      date: "07-08-2024",
      doctor: "Jose Kennedy",
      codigo: "09898989898",
      hospital: "Jose Kennedy Hospital",
    },
    {
      type: "Radiografía Torax",
      date: "07-08-2024",
      doctor: "Jose Kennedy",
      codigo: "09898989898",
      hospital: "Jose Kennedy Hospital",
    },
    {
      type: "Radiografía Torax",
      date: "07-08-2024",
      doctor: "Jose Kennedy",
      codigo: "09898989898",
      hospital: "Jose Kennedy Hospital",
    },
  ];

  return (
    <div className="revisions-grid">
      {revisions.map((revision, index) => (
        <RevisionCard revision={revision} key={index} />
      ))}
    </div>
  );
};

export default RevisionCardList;
