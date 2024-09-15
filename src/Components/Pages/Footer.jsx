import React from 'react';

export let Footer = () => {
  return (
    <>
      <footer className="page-footer font-small cyan darken-3 bg-white"> 
        <div className="footer-copyright text-center py-3">
          © 2024 Copyright: <a href="/"> HospitalManagement</a>
          <div className='container'>
            <div className='row mt-4'>
              <div className='col-md-7'>
                <div className="row">
                  <div className='col'>
                    <h5>For Patients</h5>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                      <li>Find a Doctor</li>
                      <li>Book Appointment</li>
                      <li>Treatments</li>
                      <li>Emergency 24x7</li>
                    </ul>
                  </div>
                  <div className='col'>
                    <h5>Specialities</h5>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                      <li>Technology</li>
                      <li>Patient Testimonials</li>
                      <li>CPR</li>
                    </ul>
                  </div>
                  <div className='col'>
                    <h5>Our Hospitals</h5>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                      <li>Find a Doctor</li>
                      <li>Book Appointment</li>
                      <li>Treatments</li>
                      <li>Emergency 24x7</li>
                    </ul>
                  </div>
                  <div className='col'>
                    <h5>Corporate</h5>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                      <li>Technology</li>
                      <li>Patient Testimonials</li>
                      <li>CPR</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-md-5'>
                <div className="row">
                  <div className='col'>
                    <h5>Contact</h5>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                      <li>Mobile No:- 998199819977</li>
                      <li>Address:- PhoolBag Gwalior Madhya Pradesh</li>
                      <li>Email:- hospitalmanagement@gmail.com </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
