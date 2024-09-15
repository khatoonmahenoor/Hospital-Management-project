import React, { useState } from 'react';
import '../../assets/css/login.css';
import { Link, useNavigate} from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import axios from 'axios';

export let Login = () => {
    const [doctorlogin, setDoctorlogin] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    function req_submit() {
        axios.post('http://localhost:4000/login', doctorlogin )
            .then((response) => {
                const doctorName = response.data.doctorName;
                navigate("/Doctors_patient_Details", { state: { doctorName } });
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
                            <button type="button" className="btn btn-success" onClick={req_submit}>Login</button>
                            <p className='text-center'>or</p>
                            <button className="btn btn-outline-warning" type="button"><FaGoogle />Continue with Google</button>
                            <p className='mt-2'>Don't have an account?<a><Link to="/Registration">Sign up</Link></a></p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};
