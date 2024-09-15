import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import '../../assets/css/Patientdetails.css';
import logo from '../../../public/images/logo.jpg';
import { usePatientContext } from "./patientContext";

export const DoctorsPasientDetails = () => {
  const { setPatientId } = usePatientContext();
// Display doctor's name when login doctors

  const location = useLocation();
  const doctorName = location.state ? location.state.doctorName : "";
  
  const [showpatient, setShowpatient] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentTime, setCurrentTime] = useState('');
  

// fetching data in api and display regarding to doctor's requirement 

  useEffect(() => {
    fetchAppointments();
  }, [doctorName, selectedDate]);

  const fetchAppointments = async () => {
    try {
      const response = await axios.get("http://localhost:4000/jsonAppointment");
      const appointments = response.data.filter(appointment => {
        const appointmentDate = new Date(appointment.appointmentdate);
        return appointmentDate.toDateString() === selectedDate.toDateString() && appointment.doctorsname === doctorName;
      });
      setShowpatient(appointments);
    } catch (error) {
      console.log(error); 
    }
  };

// this is time and date display

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      setCurrentTime(date.toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleDateChange = (date) => {  
    setSelectedDate(date);
  };

// this is searching patient details

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredPatients = showpatient.filter(patient => (
      patient.uname.toLowerCase().includes(searchTerm) ||
      patient.gender.toLowerCase().includes(searchTerm) ||
      patient.mobile.toLowerCase().includes(searchTerm)
    ));
    setShowpatient(filteredPatients);
  };
  

  
  return (
    <div className="container-fluid">
      <nav className="navbar doctors navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" className="rounded-circle" width="50" height="50" /><span className="mx-2">Doctor's Name: {doctorName ? doctorName : 'Unknown'}</span>

          </a>
          <div className="text-white">
            <span className="time mx-2">Time: { currentTime }</span>
          </div>
        </div>
      </nav>
      <div className="row height d-flex justify-content-center align-items-center">
      <div className="col-md-2">
        <div className="mt-2">
          <input type="date" className="form-control" id="datePicker" value={selectedDate.toISOString().slice(0, 10)} onChange={(e) => handleDateChange(new Date(e.target.value))} />
        </div>
        </div>
        <div className="col-md-8">
          <div className="form searchbar">
            <input type="text" className="form-control form-input" placeholder="Search by name, gender, or mobile..." onChange={handleSearch} />
          </div>
        </div>
      </div>
     
      <table className="table mt-2">
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
            <th></th>
          </tr>
        </thead>
        <tbody>
          {showpatient.map((patient, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{patient.uname}</td>
              <td>{patient.gender}</td>
              <td>{patient.age}</td>
              <td>{patient.appointmentdate}</td>
              <td>{patient.specialization}</td>
              <td>{patient.doctorsname}</td>
              <td>{patient.mobile}</td>
              <td>{patient.email}</td>
              <td>
              <Link
              className="btn btn-success"
              onClick={() => setPatientId(patient.id)} 
              to="/PatientDetails"
            >
              Details
            </Link>
              </td>
            </tr> 
          ))}
        </tbody>
      </table>
    </div>
  );
};



