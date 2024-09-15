import axios from 'axios';
import React, { useEffect, useState } from 'react';

export let Appointment = () => {

    const [appdata, setAppdata] = useState({ 
        uname: "",
        gender: "",
        age: "",
        appointmentdate: "",
        specialization: "",
        doctorsname: "",
        mobile: "",
        email: "",
        message: "" 
    });

    // Error states for form validation
    const [errors, setErrors] = useState({});

    const [doctors, setDoctors] = useState([]);
    const [selectedSpecialization, setSelectedSpecialization] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:4000/jsonDoctors`)
            .then((res) => {
                setDoctors(res.data);
            })
            .catch((e) => { console.log(e) });
    }, []);

    const getUniqueValues = (array, key) => {
        return Array.from(new Set(array.map(item => item[key])));
    };

    const handleSpecializationChange = (e) => {
        const specialization = e.target.value;
        setSelectedSpecialization(specialization);
        setAppdata({ ...appdata, specialization: specialization });
    };

    const filteredDoctors = selectedSpecialization
        ? doctors.filter(doctor => doctor.specialization === selectedSpecialization)
        : doctors;

    function req_submit() {
        // Check for form validation
        const validationErrors = {};
        if (!appdata.uname) {
            validationErrors.uname = "Please enter your full name";
        }
        if (!appdata.gender) {
            validationErrors.gender = "Please select your gender";
        }
        if (!appdata.age) {
            validationErrors.age = "Please enter your age";
        }
        if (!appdata.appointmentdate) {
            validationErrors.appointmentdate = "Please select appointment date";
        }
        if (!appdata.specialization) {
            validationErrors.specialization = "Please select specialization";
        }
        if (!appdata.doctorsname) {
            validationErrors.doctorsname = "Please select doctor";
        }
        if (!appdata.mobile) {
            validationErrors.mobile = "Please enter your mobile number";
        }
        if (!appdata.email) {
            validationErrors.email = "Please enter your email";
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        axios.post('http://localhost:4000/appinsert', appdata)
            .then((res) => { console.log(res) })
            .catch((e) => { console.log(e) });
    }

    function handleData(e) {
        setAppdata({ ...appdata, [e.target.name]: e.target.value });
    }

    return (
        <>
            <div className='container mb-5'>
                <div className='row'>
                    <form className='w-50 mx-auto mt-3 p-4'>
                        <h4 className='text-center'>Book Appointment</h4>

                        <div className="mb-3 mt-4">
                            <label htmlFor="uname" className="form-label">Patient Full Name</label>
                            <input type="text" className="form-control" name="uname" value={appdata.uname} onChange={handleData} placeholder="Enter your full name" />
                            {errors.uname && <div className="text-danger">{errors.uname}</div>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="gender" className="form-label">Gender</label>
                            <select className="form-select" name="gender" value={appdata.gender} onChange={handleData}>
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                            {errors.gender && <div className="text-danger">{errors.gender}</div>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="age" className="form-label">Age</label>
                            <input type="number" className="form-control" name="age" value={appdata.age} onChange={handleData} placeholder="Enter your age" />
                            {errors.age && <div className="text-danger">{errors.age}</div>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="appointmentdate" className="form-label">Date of Appointment</label>
                            <input type="date" className="form-control" value={appdata.appointmentdate} onChange={handleData} name="appointmentdate" />
                            {errors.appointmentdate && <div className="text-danger">{errors.appointmentdate}</div>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="specialization" className="form-label">Specialization</label>
                            <select className="form-select" name="specialization" onChange={handleSpecializationChange}>
                                <option value="">Select Specialization</option>
                                {getUniqueValues(doctors, 'specialization').map((specialization, index) => (
                                    <option key={index} value={specialization}>{specialization}</option>
                                ))}
                            </select>
                            {errors.specialization && <div className="text-danger">{errors.specialization}</div>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="doctorsname" className="form-label">Doctor's Name</label>
                            <select className="form-select" name="doctorsname" onChange={handleData}>
                                <option value="">Select Doctor</option>
                                {filteredDoctors.map((doctor, index) => (
                                    <option key={index} value={doctor.doctorsname}>{doctor.doctorsname}</option>
                                ))}
                            </select>
                            {errors.doctorsname && <div className="text-danger">{errors.doctorsname}</div>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="mobile" className="form-label">Mobile Number</label>
                            <input type="text" className="form-control" name="mobile" value={appdata.mobile} onChange={handleData} placeholder='Enter mobile no.' />
                            {errors.mobile && <div className="text-danger">{errors.mobile}</div>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Enter Email</label>
                            <input type="email" className="form-control" name="email" value={appdata.email} onChange={handleData} placeholder='Enter your email' />
                            {errors.email && <div className="text-danger">{errors.email}</div>}
                        </div>
                        
                        <div class="input-group mb-3">
                            <span class="input-group-text">message</span>
                            <textarea class="form-control" name="message" value={appdata.message} onChange={handleData}></textarea>

                        </div>

                        <div className="d-grid gap-2">
                            <button className="btn btn-success" type="button" onClick={req_submit}>Book Appointment</button>
                        </div>

                    </form> 
                </div>
            </div>
        </>
    )
}
