import React, { useState } from "react";
import '../components/Validation.js';
import './LoginEmployee.css'
import img from '../img/login.jpg';
import Validation from "../components/Validation.js";
import { Link } from "react-router-dom";
export default function LoginEmployee() {
	const [values, setvalues] = useState({
		username: "",
		password: ""
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
		<div className='log-container'>
			<div className="login">
				<div className="log-content">
					<img src={img} alt=''></img>
				</div>
				<div className="loginfrom">
					<h2 classname="login-title">Login</h2>
					<form className="log-form">
						<div className="input-group">
							<label for="username">Username</label>
							<input type="text" name="username" id="username" placeholder="" value={values.username} onChange={hendleChange} />
							{errors.username && <p className='error'>{errors.username}</p>}
						</div>
						<div className="input-group">
							<label for="password">Password</label>
							<input type="password" name="password" id="password" placeholder="" value={values.password} onChange={hendleChange} />
							{errors.password && <p className='error'>{errors.password}</p>}
							<br />
							<div className="forgot">
								<Link to="/Forgot">
								<a rel="noopener noreferrer" href="/">Forgot Password ?</a>
								</Link>
							</div>
						</div>
						{/* bai ider submit text dik nai ra e 
					--------------------------
					*/}
							<button className='login-button' onClick={hendleFromSubmit}><Link to="/WizardForm"> <a href="/"> <span>submit</span> </a>	</Link>
							</button>
					
					</form>
					<div className="social-message">
						<div className="line"></div>
						<p className="message">Login with social accounts</p>
						<div className="line"></div>
					</div>
					<div className="social-icons">
						<button aria-label="Log in with Google" className="icon">
							<i className="fa-brands fa-google"></i>
						</button>
						<button aria-label="Log in with Twitter" className="icon">
							<i className="fa-brands fa-x-twitter"></i>
						</button>
						<button aria-label="Log in with GitHub" className="icon"
							onClick={hendleFromSubmit}
						>
							<i className="fa-brands fa-github"></i>
						</button>
					</div>
					<p className="	gnup">Don't have an account?
						<Link to="/RegistrationEmployee">	<a rel="noopener noreferrer" href="/" className="submit">Sign up</a></Link>
					</p>

				</div>
			</div>

		</div>
	)
}
