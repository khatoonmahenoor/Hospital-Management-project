import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Allpatient } from "./Components/Pages/Allpatient";
import { Appointment } from "./Components/Pages/Appointment";
import { AllDoctors } from "./Components/Pages/Doctors";
import { Home } from "./Components/Pages/Home";
import { Login } from "./Components/Pages/Login";
import { NavBar } from "./Components/Pages/Navbar";
import { Registration } from "./Components/Pages/Registration";
import { Footer } from './Components/Pages/Footer';
import { Services } from './Components/Pages/Services';
import { NewDoctors } from './Components/Pages/Newdoctors';
import { Appoint_update } from './Components/Pages/Appoin_update';
import { Doctorsprofile } from './Components/Pages/Doctors_profile';
import { DoctorsPasientDetails } from './Components/Pages/Doctors_patient_Details';
import { PatientDetails } from './Components/Pages/PatientDetails';
// import { ScrollingImage } from './Components/Pages/Scrollingimage';
import { PatientContextProvider } from './Components/Pages/patientContext';



function App() {
  
  return (
    <>
     <BrowserRouter>
     <NavBar/>
     <PatientContextProvider>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/Allpatient" element={ <Allpatient/> } />
        <Route path="/Login" element={ <Login/> } />
        <Route path="/Registration" element={ <Registration/> } />
        <Route path="/AllDoctors" element={ <AllDoctors/> } />
        <Route path="/Appointment" element={ <Appointment/> } />
        <Route path="/Services" element={ <Services/>  } />
        <Route path="/NewDoctors" element={ <NewDoctors/>  } />
        <Route path="/Appoin_update" element={ <Appoint_update/>  } />
        <Route path="/Doctors_profile" element={ <Doctorsprofile/>  } />
        <Route path="/Doctors_patient_Details" element={ <DoctorsPasientDetails/>  } /> 
        <Route path="/PatientDetails" element={ <PatientDetails/>  } />
        {/* <Route path="/patientContext" element={<PatientContextProvider/>} /> */}
      </Routes>
      {/* <ScrollingImage/> */}
      </PatientContextProvider>
      <Footer/>

     </BrowserRouter>
    </>
  )
}

export default App;
