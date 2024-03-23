import React, { useState } from "react";
import img from '../img/Welcome Employers Register to Post Jobs.jpg'
import './CompanyLogin.css'
import Validation from "../components/Com_log_val";
export default function CompanyLogin() 
{
  const [values, setvalues] = useState({
    com_name:"",
    con_person: "",
    con_num: "",
    email: "",
    gst:""
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
    <div className="wrapper">
        <div className="inner">
          <div className="image-holder">
            <img
              src={img}
              alt="/" />
          </div>
          <form action="/">
            <h3>Registration</h3>

            <div class="form-wrapper">
              <input type="text" placeholder="company name" className="form-control"onChange={hendleChange} value={values.com_name} 
              />
            </div>
            {errors.com_name && <p className='error'>{errors.com_name}</p>}
            <div class="form-wrapper">
              <input type="text" placeholder="contect person" className="form-control" onChange={hendleChange}  value={values.con_person} />
               {errors.con_person && <p className='error'>{errors.con_person}</p>}
               <input type="text" placeholder="contect number" className="form-control" onChange={hendleChange}  value={values.con_num} />
                {errors.con_num && <p className='error'>{errors.con_num}</p>}
               <input type="text" placeholder="contect person email" className="form-control" onChange={hendleChange}  value={values.email} />
               {errors.email && <p className='error'>{errors.email}</p>}
              <label for="gst_number">GST Number:</label>
              <input type="text" id="gst_number" name="gst_number" placeholder="Enter GST Number" maxlength="15" pattern="[0-9]{15}" 
              title="GST number should be 15 digits numeric" value={values.gst}/>

            </div>
            
            <div className="form-wrapper">
             
            </div>
            {/* {errors.conpass && <p className='error'>{errors.conpass}</p>} */}
            <button className='reg-button'
             onClick={hendleFromSubmit}
            ><span>submit</span></button>
          </form>
        </div>
      </div>

  )
}
