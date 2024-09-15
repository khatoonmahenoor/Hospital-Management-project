import React, { createContext, useContext, useState } from "react";

const PatientContext = createContext();

export const usePatientContext = () => useContext(PatientContext);

export const PatientContextProvider = ({ children }) => {
  const [patientId, setPatientId] = useState(null);

  return (
    <PatientContext.Provider value={{ patientId, setPatientId }}>
      {children}
    </PatientContext.Provider>
  );
};



