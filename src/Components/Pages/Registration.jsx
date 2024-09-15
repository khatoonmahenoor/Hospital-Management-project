import React from 'react';
import '../../assets/css/login.css';
import { Link } from 'react-router-dom';


export let Registration = ()=>{
    return(
        <>
<div className='container'>
    <div className='row'>
    <form className='w-50 mx-auto mt-3 p-4'>
    <h4 className='text-center'>New Registration</h4>
    <div className="mb-3 mt-4">
    <label for="ename" className="form-label">Enter ename</label>
    <input type="ename" className="form-control" id="email" placeholder='Enter ename' aria-describedby="ename" />
  </div>
  <div className="mb-3">
    <label for="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" aria-describedby="email" placeholder='Enter email' />
  </div>
  <div className="mb-3">
    <label for="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password"  placeholder='Enter password'/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" for="check">Check me out</label>
  </div>
  <div className="d-grid gap-2">
  <button className="btn btn-success" type="button">Registration</button>
  <p className='mt-2'>Already have an account?<a><Link to="/Login_doctors">Log in</Link></a></p>
</div>
</form>    
    </div>
</div>
    </>
    )
}