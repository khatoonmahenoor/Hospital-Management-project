import React from "react";
import '../../assets/css/Navbar.css';
import { NavLink } from "react-router-dom";

export let NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar fixed-top nav-white bg-white">
                <div className="container-fluid">
                    <NavLink className="navbar-brand mx-5" to="#">Hospital Management</NavLink>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav d-flex">
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/" activeClassName="active-link">Desboard</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Appointment" activeClassName="active-link">Appointment</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/AllDoctors" activeClassName="active-link">AllDoctors</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Allpatient" activeClassName="active-link">Allpatient</NavLink>
                            </li>

                            {/* <li className="nav-item dropdown">
                                    <NavLink className="nav-link dropdown-toggle" to="/Services" role="button" data-bs-toggle="dropdown">Services</NavLink>
                                    <ul className="dropdown-menu">
                                        <li><NavLink className="dropdown-item" href="#">Link</NavLink></li>
                                        <li><NavLink className="dropdown-item" href="#">Another link</NavLink></li>
                                        <li><NavLink className="dropdown-item" href="#">A third link</NavLink></li>
                                    </ul>
                                </li> */}


                            <li className="nav-item">
                                <NavLink className="nav-link" to="/NewDoctors" activeClassName="active-link">NewDoctor</NavLink>
                            </li>
                            
                            {/* <li className="nav-item">
                                <NavLink className="nav-link" to="/Doctors_patient_Details" activeClassName="active-link">Patient_Doctors_Details</NavLink>
                            </li> */}

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Login" activeClassName="active-link">Login</NavLink>
                            </li>
                            {/* <li className="nav-item">
                                <NavLink className="nav-link" to="/Scrollingimage" activeClassName="active-link">Scrollbar</NavLink>
                            </li> */}
                            {/* <li className="nav-item">
                                <NavLink className="nav-link" to="/PatientDetails" activeClassName="active-link">PatientDetails</NavLink>
                            </li> */}

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
