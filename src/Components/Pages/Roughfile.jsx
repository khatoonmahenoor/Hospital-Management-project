Routes
MemoryRouter.js
route.post("/doctor_login", ctrl.doc_login);

// ///DOCTOR LOGIN//

//controller
mycontrol.js


let doc_login = (req, res) => {
    let {email, pwd} = req.body;
    mysql.db_doctor_login(email, pwd)
        .then((result) => {
            if (result.status === 'working') {
                // console.log(result);  
            } else {
                console.log(result);
            }
        })
        .catch((error) => {
            console.error("Error is comming in login:", error);
            res.status(500).send("Internal Server Error");
        });
};

module.exports = {doc_login}

connection
dbconnection.js

DOCTOR LOGIN 


let db_doctor_login = (email, pwd) => {
    return new Promise((resolve, reject) => {
connection.query(
  'SELECT ename FROM doctor_table WHERE email = ? AND password = ?',
            [email,pwd],
            (err, results) => {
              console.log(results);
                if (err) {
                    reject(err);
                } else if (results.length > 0) {
                    resolve({ status:'working',data: results[0] });  
                    
                    // // Login successful
                } else {
                    resolve({ status:'error', data:err });   //// Invalid email or password
                }
            }
        );
    });
  };

module.exports = {db_doctor_login}

///////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////


//  speciality code

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Appointment.css';
import Header from './Header';
import { Routes } from 'react-router-dom';

function Appointment() {

  let [speciality, setSpeciality] = useState();
  
  let [data, setdata] = useState({
    ename: "",
    gender: "",
    mob: "",
    dob: "",
    city: "",
    speciality: "",
    date_of_appoint: "",
    // doctor: ""
    doctor_name:""
  });

  let [specialities, setSpecialities] = useState([]);
  let [doctors_bySpecialty, set_doctorsBySpecialty] = useState([]); 

  // For error --------------------------------------------------------------------
  let [Err_ename, setename] = useState("");
  let [Err_gender, setgender] = useState("");
  let [Err_mob, setmob] = useState("");
  let [Err_dob, setdob] = useState("");
  let [Err_city, setcity] = useState("");
  let [Err_speciality, setspeciality] = useState("");
  let [Err_doctor, setdoctor] = useState("");
//   let [Err_doctor, setdoctor] = useState("");
  let [Err_date_appoint, setdate_appoint] = useState("");

  let handle_data = (e) => {
    setSpeciality(e.target.value);
    setdata({ ...data, [e.target.name]: e.target.value });
  };
// FORM SUMBIT-----------------------------------------------------
  function submit() {
    axios.post("http://localhost:8000/radiant_appoint", data)
      .then((response) => {
        console.log(response);
      }).catch((error) => {
        console.log(error);
      });

console.log(data);


    // Validation
    if (data.ename === "") {
      setename("The name field is required.");
    } else if (data.ename.length > 0 && data.ename.length <= 4) {
      setename("Please write your full name");
    }

    if (data.gender === "") {
      setgender("The gender field is required.");
    }

    if (data.mob === "") {
      setmob("The mobile field is required.");
    } else if (data.mob.length > 0 && data.mob.length < 10) {
      setmob("Invalid mobile number.");
    }

    if (data.dob === "") {
        setdob("The date of birth field is required.");
      }
  
      if (data.city === "") {
        setcity("The city field is required.");
      }
  
      if (data.speciality === "") {
        setspeciality("The speciality field is required.");
      }
  
      if (data.doctor === "") {
        setdoctor("The doctor field is required");
      }
  
      if (data.date_appoint === "") {
        setdate_appoint("The date of appointment field is required.");
      }
  
   
    };
  
    //  specialties----------------------------------------------
   useEffect(() => {
    axios.get("http://localhost:8000/speciality")
      .then((response) => {
        let specialties = response.data.map(Xspeciality => Xspeciality.speciality);
        setSpecialities(specialties);
      })
      .catch((error) => console.log(error));
  }, []);
// /// fetching doctor's name----------------------
useEffect(() => {
    axios.get("http://localhost:8000/doctorJson_doc/"+speciality)
      .then((response) => {
        // console.log(response.data);
        set_doctorsBySpecialty(response.data); 
      })
      .catch((error) => console.log(error));
  }, [speciality]);
  
  
    // let handle_spec = (e) => {
    //   let selected_specialty = e.target.value;
    //   console.log(selected_specialty);
    
      // let filteredDoctors = doctors_bySpecialty.filter(doctor => doctor.speciality === selected_specialty);
      // set_doctorsBySpecialty(filteredDoctors);
    
    //   console.log(filteredDoctors);
    // };
  
    return (
        <>
          <Header />
          <div className="container-app">
            <form className='form1'>
              <h2>BOOK APPOINTMENT<hr /></h2>
              <div className="row ">
                <div className="col-6">
                  <label>Name:</label>
                  <input type="text" className="form-control" value={data.ename} onChange={handle_data} placeholder="Enter Your Full Name" name='ename' />
                  {data.ename.length === 0 || data.ename.length <= 4 ? <div style={{ color: "red" }}>{Err_ename}</div> : null}
                </div>
                <div className="col-6">
                  <label>Gender:</label><br />
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" value="Male" onChange={handle_data} name="gender" id="male" />
                    <label className="form-check-label text-dark" >Male</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" value="Female" onChange={handle_data} name="gender" id="female" />
                    <label className="form-check-label text-dark">Female</label>
                  </div>
                  {data.gender.length === 0 ? <div style={{ color: "red" }}>{Err_gender}</div> : null}
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <label>Phone No:</label>
                  <input type="text" className="form-control" value={data.mob} onChange={handle_data} placeholder="Phone No." name='mob' />
                  {data.mob.length === 0 || data.mob.length < 10 ? <div style={{ color: "red" }}>{Err_mob}</div> : null}
            </div>
            <div className="col-6">
              <label>Date Of Birth:</label>
              <input type="date" className="form-control" value={data.dob} onChange={handle_data} placeholder="DOB" name='dob' />
              <div style={{ color: "red" }}>{Err_dob}</div>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label>City:</label>
              <input type="text" className="form-control" value={data.city} onChange={handle_data} placeholder="City" name='city' />
              <div style={{ color: "red" }}>{Err_city}</div>
            </div>
           
           <div className="row">
            <div className="col-6">
              <label>Speciality:</label>
              <select className="form-select" name="speciality" onChange={handle_data} id="speciality">
                <option>Select Speciality</option>
                {specialities.map((spec) => (
                  <option value={spec}>{spec}</option>
                ))}
              </select>
              <div style={{ color: "red" }}>{Err_speciality}</div>
            </div>
            <div className="col-6">
              <label>Date Of appointment:</label>
              <input type="date" name='date_of_appoint' className="form-control" value={data.date_of_appoint} onChange={handle_data} placeholder="Enter Date of Appointment"  />
              <div style={{ color: "red" }}>{Err_date_appoint}</div>
            </div>
          </div>

            <div className="col-6">
              <label>Doctors:</label>
<select className="form-select" onChange={handle_data} name='doctor_name' id="doctor">
                <option>Select Doctor</option>
                {
                doctors_bySpecialty.map((doctor) => (
                  <option value={doctor.ename}>{doctor.ename}</option>
                ))
                }
              </select>
              <div style={{color:"red" }}>{Err_doctor}</div>
            </div>
          </div> 
          <button type="button" onClick={submit} className="btn btn-box">Book an Appointment</button>
        </form>
      </div>
    </>
  );
}

export default Appointment;
        


//doctor's login 


import React, { useState } from 'react';
import '../../assets/css/login.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

export let Login_doctors = () => {
    const [doctorlogin, setDoctorlogin] = useState({ email: '', password: '' });
    const [doctorName, setDoctorName] = useState('');

    function req_submit() {
        axios.post('http://localhost:4000/doctors_login', doctorlogin)
            .then((response) => {
                setDoctorName(response.data.doctorName);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function handleData(e) {
        setDoctorlogin({ ...doctorlogin, [e.target.name]: e.target.value });
    }

    return (
        <>
            <div className='container mb-5'>
                <div className='row'>
                    <form className='w-50 mx-auto mt-3 p-5'>
                        <h3 className='text-center'>Log In</h3>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" placeholder='Enter email' name="email" value={doctorlogin.email} onChange={handleData} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" placeholder='Enter password' name="password" value={doctorlogin.password} onChange={handleData} />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>
                        <div className="d-grid gap-2">
                            {/* <button type="button" className="btn btn-success" onClick={req_submit}>Login</button> */}
                        </div>
                        <h6>Doctor Name: {doctorName}</h6>
                        <td><Link to="/Doctors_profile"  className="btn btn-success"  onClick={req_submit}>Submit</Link></td>
                    </form>
                </div>
            </div>
        </>
    );
};





import React, { useState, useEffect } from "react";
import axios from "axios"; 
import logo from '../../../public/images/logo.jpg'; 

export const DoctorsPasientDetails = () => {
    let [pasientDetails, setPasientdetails] = useState([]);
    let [currentDate, setCurrentDate] = useState('');
    let [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date();
            setCurrentDate(date.toLocaleDateString());
            setCurrentTime(date.toLocaleTimeString());
        }, 1000); // Update every second

        return () => clearInterval(interval);
    }, []);

    // Uncomment this useEffect if you want to fetch data using Axios
    // useEffect(() => {
    //     axios.get("http://localhost:4000/jsonAppointment")
    //       .then((response) => {
    //         setPasientdetails(response.data);
    //       })
    //       .catch((error) => console.log(error));
    // }, []);

    return (
        <>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="" width="30" height="24" /><span className="mx-2">Name:</span>
                    </a>
                </div>
            </nav>
            <p>
                <span>Today Date: {currentDate}</span>
                <span>Time: {currentTime}</span>
            </p>
        </>
    )
}














/////// those doctors whose speciality is selelcted  will come 
let db_spec_doc = (req) => {

    let promise = new Promise((resolve, reject) => {
  connection.query("SELECT ename FROM doctor_table WHERE speciality=?",[req], (err, result) => {
               if (err) {
                   reject({ status: "error", data: err.message })
               }
               else {
                   resolve({ status: "ok", data: result });
               }
           });
  
       });
  
       return promise;
   }





  import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios"; // Import axios

import logo from '../../../public/images/logo.jpg';

export const DoctorsPasientDetails = () => { 
  const location = useLocation();
  const doctorName = location.state ? location.state.doctorName : ""; 

  let [showpatient, setShowpatient] = useState([]);
  let [currentDate, setCurrentDate] = useState('');
  let [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
      const fetchAppointments = async () => {
          try {
              const response = await axios.get("http://localhost:4000/jsonAppointment");
              const appointments = response.data.filter(appointment => {
                  const appointmentDate = new Date(appointment.appointmentdate);
                  const today = new Date();
                  return appointmentDate.toDateString() === today.toDateString() && appointment.doctorsname === doctorName;
              });
              setShowpatient(appointments);
          } catch (error) {
              console.log(error);
          }
      };
      fetchAppointments();
  }, [doctorName]); // Fetch appointments whenever the doctorName changes

  //Display current date and time
  useEffect(() => {
      const interval = setInterval(() => {
          const date = new Date();
          setCurrentDate(date.toLocaleDateString());
          setCurrentTime(date.toLocaleTimeString());
      }, 1000); 

      return () => clearInterval(interval);
  }, []);

  return (
      <>
          <div className="container-fluid">
              <nav className="navbar navbar-dark bg-dark">
                  <div className="container">
                      <a className="navbar-brand" href="#">
                          <img src={logo} alt="" className="rounded-circle" width="50" height="50" /><span className="mx-2">Doctor's Name: {doctorName}</span>
                      </a>
                  </div>
              </nav>
          </div>
          <p>
              <span>Today Date: {currentDate}</span>
              <span>Time: {currentTime}</span>
          </p>

          {/* Display the patient details for current date and the logged-in doctor */}
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
                      </tr>
                  ))}
              </tbody>
          </table>
      </>
  )
}





import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios"; // Import axios
import '../../assets/css/Patientdetails.css';
import logo from '../../../public/images/logo.jpg';


export const DoctorsPasientDetails = () => { 
  const location = useLocation();
  const doctorName = location.state ? location.state.doctorName : ""; 

  let [showpatient, setShowpatient] = useState([]);
  let [currentDate, setCurrentDate] = useState('');
  let [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
      const fetchAppointments = async () => {
          try {
              const response = await axios.get("http://localhost:4000/jsonAppointment");
              const appointments = response.data.filter(appointment => {
                  const appointmentDate = new Date(appointment.appointmentdate);
                  const today = new Date();
                  return appointmentDate.toDateString() === today.toDateString() && appointment.doctorsname === doctorName;
              });
              setShowpatient(appointments);
          } catch (error) {
              console.log(error);
          }
      };
      fetchAppointments();
  }, [doctorName]); 

  //Display current date and time

  useEffect(() => {
      const interval = setInterval(() => {
          const date = new Date();
          setCurrentDate(date.toLocaleDateString());
          setCurrentTime(date.toLocaleTimeString());
      }, 1000); 

      return () => clearInterval(interval);
  }, []);

  return (
      <>
          <div className="container-fluid">
              <nav className="navbar doctors navbar-dark bg-dark">
                  <div className="container">
                      <a className="navbar-brand" href="#">
                          <img src={logo} alt="" className="rounded-circle" width="50" height="50" /><span className="mx-2">Doctor's Name: {doctorName}</span>
                      </a> 
                      <div className="text-white">
                          <span className="time mx-2">Time: {currentTime}</span>
                      </div>
                  </div>
              </nav>
              <div className="text-white">
              <span className="time">Date: {currentDate}</span>
              </div>
          {/* Display the patient details for current date and the logged-in doctor */}
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
                      </tr>
                  ))}
              </tbody>
          </table>
          </div>
      </>
  )
}


import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import '../../assets/css/Patientdetails.css';
import logo from '../../../public/images/logo.jpg';
import { Link, useNavigate } from 'react-router-dom';

export const DoctorsPasientDetails = () => {

// Display doctor's name when login doctors

  const location = useLocation();
  const doctorName = location.state ? location.state.doctorName : "";
  
  const [showpatient, setShowpatient] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentTime, setCurrentTime] = useState('');
  const navigate = useNavigate();

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
              <Link to={{ pathname: "/PatientDetails", state: { patients: showpatient } }} className="btn btn-success">Details</Link>

              </td>
            </tr> 
          ))}
        </tbody>
      </table>
    </div>
  );
};
