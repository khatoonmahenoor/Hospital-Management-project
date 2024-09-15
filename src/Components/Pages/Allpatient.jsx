import axios from "axios";
import { useEffect, useState } from "react";
import '../../assets/css/Patient.css';

export let Allpatient = () => {
  let [showpatient, setShowpatient] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/jsonAppointment")
      .then((response) => {
        setShowpatient(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr className="table-dark">
            <th>S.No</th>
            <th>Patient Name</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Appointment Date</th>
            <th>Specialization</th>
            <th>Doctor's Name</th>
            <th>Mobile</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {showpatient.map((patient, index) => (
            <tr>
              <td>{patient.id}</td>
              <td>{patient.uname}</td>
              <td>{patient.gender}</td>
              <td>{patient.age}</td>
              <td>{patient.appointmentdate}</td>
              <td>{patient.specialization}</td>
              <td>{patient.doctorsname}</td>
              <td>{patient.mobile}</td>
              <td>{patient.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
