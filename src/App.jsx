import { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Pacientes from "./pages/Pacientes";
import Revision from "./pages/Revision";
import RevisionResult from "./pages/RevisionResult";
import PatientProfile from "./pages/PatientProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/pacientes" element={<Pacientes />} />
        <Route path="/revision" element={<Revision />} />
        <Route path="/revisionresultado" element={<RevisionResult />} />
        <Route path="/patientprofile" element={<PatientProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
