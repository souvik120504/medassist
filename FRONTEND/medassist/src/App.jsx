import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./assets/css/App.css";
import doctor from "./assets/images/doctor.avif";
import Navbar from "./Navbar";
import FeedbackForm from "./FeedbackForm";
import Service from "./Service";
import Login from "./Login";
import About from "./About";
// import Department from "./Department";
// import Medic from "./Medic";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

      <Route path="/" element= {
    <div className='App'>
      <div className="top1">
        <h2 className='official'>WELCOME TO THE OFFICIAL PAGE OF MediAssist+</h2>
        <Link to="/login" className='log'>LOGIN</Link>
    </div>
      <Navbar />
    
     <div className="hero-sec">
      <div className="hero-text">
        <div className="stext1">Get Better Care For Your Health</div>
        <div className="stext2">This platform connects patients with doctors while providing reliable resources to support informed healthcare decisions</div>
      </div>
      <img src={doctor} alt="doctor" className='hero-img'></img>
      
    </div>
    <div className="card-medic">
      <div className="card1">
        <div className="cardio1">CARDIOLOGY</div>
        <div className="cardio2">The branch of medicine that focuses on diagnosing, treating, and preventing diseases of the heart and blood vessels.</div>
        <div className="cardio3">
          <a href="#">{'>'}</a>
        </div>
      </div>
      <div className="card2">
        <div className="neuro1">NEUROLOGY</div>
        <div className="neuro2">The medical specialty dedicated to diagnosing and treating disorders of the brain, spinal cord, and nervous system</div>
        <div className="neuro3">
          <a href="#">{'>'}</a>
        </div>
      </div>
      <div className="card3">
        <div className="gyno1">GYNAECOLOGY</div>
        <div className="gyno2">The branch of medicine that focuses on the health, diagnosis, and treatment of the female reproductive system.</div>
        <div className="gyno3">
          <a href="#">{'>'}</a>
        </div>
      </div>
    </div>
    <div className="box4">CONTACT US</div>
    <div className="feed">
      <FeedbackForm />
    <div className="contact">
      <div className="box5">CONTACT US</div>
      <div className="box6">mediassist123@gmail.com</div>
      <div className="box7">(908) 686-1200</div>
      <div className="box8"><b>Westfield</b></div>
      <div className="box9">233 North Avenue E Westfield , N1 07090</div>
      <div className="box10">Short Hills Office</div>
      <div className="box11">549 Millburn Ave. Short Hills, NJ 0708</div>
    </div>
    </div>
    </div>
 } />
<Route path="/service" element={<Service />} />
<Route path="/login" element={<Login />} />
<Route path="/about" element={<About />} />
{/* <Route path="/department" element={<Department />} />
<Route path="/department/:id" element={<Medic />} /> */}
</Routes>
</BrowserRouter>
  );
}