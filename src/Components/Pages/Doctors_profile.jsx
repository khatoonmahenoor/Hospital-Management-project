import React from 'react';
// import { useLocation } from 'react-router-dom';
import './Login';

export let Doctorsprofile = (props) => {
    // const location = useLocation();
    // const doctorName = location.state ? location.state.doctorName : '';

    return (
        <>
        <div className='container mb-5'>
          <form className='w-50 mx-auto mt-5 p-5'>

           <h4 className="mt-5 mb-5">Hello Doctor's Profile</h4>

            <h5>Doctor Name: {props.doctorName}</h5>

          </form> 
        </div>
           
        </>
    )
}
