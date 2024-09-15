import React, { useEffect, useState } from "react";
import { usePatientContext } from "./patientContext";
import axios from "axios";

export const PatientDetails = () => {
  const { patientId } = usePatientContext();
  const [patientDetails, setPatientDetails] = useState(null);

  useEffect(() => {
    if (patientId) {
      fetchPatientDetails(patientId);
    }
  }, [patientId]);

  const fetchPatientDetails = async (id) => {
    try {
      const response = await axios.get(`http://localhost:4000/jsonAppointment/${id}`);
      setPatientDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-50 vw-50 border border-white bg-white mb-5 p-5">
      <div className="">
        <h1>Patient Details</h1>
        {patientDetails ? (
          <ul>
            <li>Patient Name: {patientDetails.uname}</li>
            <li>Gender: {patientDetails.gender}</li>
            <li>Age: {patientDetails.age}</li>
            <li>Mobile No: {patientDetails.mobile}</li>
            <li>Email: {patientDetails.email}</li>
            <li>Appointment Date: {patientDetails.appointmentdate}</li>
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};
