import { useState } from 'react';
import '../../assets/css/Appoin_update.css';

export let Appoint_update =()=>{

let [date, setDate] = useState();


    return(
        <>
          <div className='container mb-5'>
                <div className='row'>
                    <form className='w-50 mx-auto mt-5 p-4'>
                        <h4 className='text-center'>Update Appointment Date</h4>

                        <div className="mb-3 mt-4">
                            <label htmlFor="uname" className="form-label">Patient Name</label>
                            <input type="text" className="form-control" name="uname"  placeholder="Enter your full name" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="appointmentdate" className="form-label">Date of Appointment</label>
                            <input type="date" className="form-control"  name="appointmentdate" />
                        </div>

                        <div className="d-grid gap-2">
                            <button className="btn btn-success" type="button" >Update Appointment</button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}