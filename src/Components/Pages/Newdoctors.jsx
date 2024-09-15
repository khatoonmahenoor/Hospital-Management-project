import { useState } from "react"


export let NewDoctors = ()=>{

    let [newdoctor, setNewdoctor] = useState();
    // const [selectedSpecialization, setSelectedSpecialization] = useState('');

    // const handleSpecializationChange = (e) => {
    //     const specialization = e.target.value;
    //     setSelectedSpecialization(specialization);
    //     setAppdata({ ...appdata, specialization: specialization });
    // };

    const handleFile =()=>{
        setNewdoctor(e.target.files[0])
    }

    const handleUpload = ()=>{


    }

    useState(()=>{

    },[])

    return(
        <>
             <div className='container mb-5'>
                <div className='row'>
                    <form className='w-50 mx-auto mt-3 p-4'>
                        <h4 className='text-center'>SignUp New Doctor's</h4>

                        <div className="mb-3 mt-4">
                            {/* <label htmlFor="doctorname" className="form-label">Full Name</label> */}
                            <input type="text" className="form-control" name="doctorname" placeholder="Enter doctor's name" />
                        </div>

                        <div className="mb-3">
                            {/* <label htmlFor="gender" className="form-label">Gender</label> */}
                            <select className="form-select" name="gender" >
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            {/* <label htmlFor="mobile" className="form-label">Mobile Number</label> */}
                            <input type="text" className="form-control" name="mobile" placeholder='Enter mobile no.' />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="specialization" className="form-label">Specialization</label>
                            <select className="form-select" name="specialization" onChange={handleFile}>
                                <option value="">Select Specialization</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            {/* <label htmlFor="image" className="form-label">Upload Image</label> */}
                            <input type="file" className="form-control" name="image" onChange={handleFile} />
                        </div>

                        <div className="mb-3">
                            {/* <label htmlFor="email" className="form-label">Mobile Number</label> */}
                            <input type="email" className="form-control" name="email" placeholder='Enter Email' onChange={handleFile} />
                        </div>

                        <div className="mb-3">
                            {/* <label htmlFor="password" className="form-label">Mobile Number</label> */}
                            <input type="password" className="form-control" name="password" placeholder='Enter password' onChange={handleFile} />
                        </div>

                        <div className="mb-3">
                            {/* <label htmlFor="confirmpassword" className="form-label">Confirm password</label> */}
                            <input type="password" className="form-control" name="password" placeholder='Enter confirm password' onChange={handleFile} />
                        </div>

                        <div className="d-grid gap-2">
                            <button className="btn btn-success" type="button" onClick={handleUpload} >Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}