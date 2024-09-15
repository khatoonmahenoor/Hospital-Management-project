import axios from 'axios';
import { useEffect, useState } from 'react';
import '../../assets/css/Doctors.css';
import { Link } from 'react-router-dom';


export let AllDoctors = () => {
  const [doctors, setDoctors] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:4000/jsonDoctors")
      .then((response) => {
        console.log(response)
        setDoctors(response.data);
      })
      .catch((error) => console.log(error));
  }, []);


  return (
    <>
      <section className='py-4 container'>
        <div className='row'>
          {doctors.map((item, index) => (
            <div key={index} className="col-3 mb-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src={item.image}
                  alt={item.uname}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{item.doctorsname}</h5>
                  <h6 className="card-text">Speciality:-   {item.specialization}</h6>
                  <h6 className="card-text">Gender:- {item.gender}</h6>
                  <h6 className="card-text">Mobile No:-   {item.mobile}</h6>
                  <div className="text-center mt-3">
                  <Link to="/appointment" className="btn btn-success">Book Appointment</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </>
  );
}
