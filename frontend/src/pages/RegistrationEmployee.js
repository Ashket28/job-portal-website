import React, { useState } from "react";
import { GoogleOAuthProvider , GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import img from '../img/reg.jpg';
import './RegistrationEmployee.css';
import Validation from "../components/Validation";
import { Link } from "react-router-dom";
// import job from "./job.js";
export default function RegistrationEmployee() {
  const [values, setvalues] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    gender:"",
    password: "",
    conpass: ""
  });
  const hendleChange = (event) => {
    setvalues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const hendleFromSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
  };
  const [errors, setErrors] = useState({});
  
  return (
    <div>
      <div className="wrapper">
        <div className="inner">
          <div className="registra-image-holder">
            <img src={img} alt="/" />
          </div>
          <form action="/">
            <h3>Registration Form</h3>
            <div class="form-group">
              <input type="text" 
               placeholder="First Name"
               className="form-control"
                name="firstname" 
                onChange={hendleChange} 
                value={values.firstname} />
              
              <input type="text"
               placeholder="Last Name"
               className="form-control" 
               name="lastname" 
               onChange={hendleChange} 
               value={values.lastname} />
            </div>
            {errors.firstname && <p className='error'>{errors.firstname}</p>}
            {errors.lastname && <p className='error'>{errors.lastname}</p>}
            <div class="form-wrapper">
              <input type="text" placeholder="Username" className="form-control" onChange={hendleChange} name="username" value={values.username} />
            </div>
            {errors.username && <p className='error'>{errors.username}</p>}
            <div class="form-wrapper">
              <input type="text" placeholder="Email Address" className="form-control" onChange={hendleChange} name="email" value={values.email} />
            </div>
            {errors.email && <p className='error'>{errors.email}</p>}
            {/* <div className="form-wrapper">
              <select className="form-control" value={values.gender} onChange={hendleChange}>
                <option value="" disabled selected>Gender</option>
                <option values="male">Male</option>
                <option values="female">Female</option>
                <option values="other">Other</option>
              </select>
            </div> */}
            {/* {errors.gender && <p className='error'>{errors.gender}</p>} */}
            <div className="form-wrapper">
              <input type="password" placeholder="Password" className="form-control" name="password" onChange={hendleChange} value={values.password} />
            </div>
            {errors.password && <p className='error'>{errors.password}</p>}
            <div className="form-wrapper">
              <input type="password" placeholder="Confirm Password" className="form-control" name="conpass" onChange={hendleChange} value={values.conpass} />  
            </div>
            {errors.conpass && <p className='error'>{errors.conpass}</p>}
            
            <button className='reg-button' onClick={hendleFromSubmit}> <Link to="/WizardForm" > <span>submit</span></Link></button>
            <p className="p-reg">---------- or--------- </p>
            <div className="google-btn">
              
            <GoogleOAuthProvider clientId="600248593848-0bclarknbtlln9uu8c62nbemrbauks78.apps.googleusercontent.com" >
                <GoogleLogin 
                 onSuccess={credentialResponse => {
                  const decoded = jwtDecode(credentialResponse.credential);
                  console.log(decoded);
                  }}
                  onError={() => {
                  console.log('Login Failed');
                  }}/>
            </GoogleOAuthProvider>
            
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}
