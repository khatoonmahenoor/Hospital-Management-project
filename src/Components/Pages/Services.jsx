import axios from 'axios';
import React, { useState, useEffect } from 'react';

export let Services = () => {
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
        setSelectedSpecialization(e.target.value);
    };

    const filteredDoctors = selectedSpecialization
        ? doctors.filter(doctor => doctor.specialization === selectedSpecialization)
        : doctors;

    return (
        <>
            <div className='container mb-5'>
                <div className='row'>
                    <form className='w-50 mx-auto mt-3 p-4'>
                        <h4 className='text-center'>Book Appointment</h4>

                        <div className="mb-3">
                            <label htmlFor="specialization" className="form-label">Specialization</label>
                            <select className="form-select" name="specialization" onChange={handleSpecializationChange}>
                                <option value="">Select Specialization</option>
                                {getUniqueValues(doctors, 'specialization').map((specialization, index) => (
                                    <option key={index} value={specialization}>{specialization}</option>
                                ))}
                            </select>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="doctorsname" className="form-label">Doctor's Name</label>
                            <select className="form-select" name="doctorsname">
                                <option value="">Select Doctor</option>
                                {filteredDoctors.map((doctor, index) => (
                                    <option key={index} value={doctor.doctorsname}>{doctor.doctorsname}</option>
                                ))}
                            </select>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
