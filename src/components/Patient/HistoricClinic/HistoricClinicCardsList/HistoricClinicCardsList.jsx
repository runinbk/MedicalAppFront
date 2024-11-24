import React, { useState } from "react";
import "./HistoricClinicCardsList.css";
import HistoricClinicCard from "../HistoricClinicCard/HistoricClinicCard";
import AddExamModal from "../../../Modals/PatientAddExamModal/AddExamModal";

const HistoricClinicCardsList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [singleExamData, setSingleExamData] = useState(null);

  const examData = [
    {
      date: "07-08-2024",
      name: "Analisis de Sangre",
      doctor: "Jose Kennedy",
      codigo: "1253339746",
      hospital: "Jose Kennedy Hospital",
    },
    {
      date: "07-08-2024",
      name: "Analisis de Sangre",
      doctor: "Jose Kennedy",
      codigo: "1253339746",
      hospital: "Jose Kennedy Hospital",
    },
    {
      date: "07-08-2024",
      name: "Analisis de Sangre",
      doctor: "Jose Kennedy",
      codigo: "1253339746",
      hospital: "Jose Kennedy Hospital",
    },
  ];

  const handleOpenModal = (exam) => {
    if (exam) setSingleExamData(exam);

    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSingleExamData(null);
  };

  return (
    <>
      <AddExamModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        examData={singleExamData}
      />
      <div className="historic-clinic-section">
        <div className="exams-row">
          <div className="add-exam-card" onClick={() => handleOpenModal()}>
            <div className="add-exam-content">
              <div className="add-icon">+</div>
              <span className="add-text">
                Agregar Examen a la Historia Clinica
              </span>
            </div>
          </div>

          {examData.map((exam, index) => (
            <HistoricClinicCard
              onClick={() => handleOpenModal(exam)}
              exam={exam}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default HistoricClinicCardsList;
