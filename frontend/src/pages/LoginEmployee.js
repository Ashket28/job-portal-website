import React, { useState } from "react";
import './LoginEmployee.css'
import { FaUser } from "react-icons/fa";
import { MdLockPerson } from "react-icons/md";
import img from '../img/3525444.jpg'
import { Link } from "react-router-dom";
export default function LoginEmployee() {
	return (
		<>
			{/* <div id="login-form-wrap">
				<h2>Login</h2>
				<form id="login-form">
					<p>
						<input type="text" id="username" name="username" placeholder="Username" required /><i class="validation" ><span></span><span></span></i>
					</p>
					<p>
						<input type="email" id="email" name="email" placeholder="Email Address" required /><i class="validation"><span></span><span></span></i>
					</p>
					<p>
						<input type="submit" id="login" value="Login"/>
					</p>
				</form>
				<div id="create-account-wrap">
					<p>Not a member? <a href="/">Create Account</a></p>
					</div>
				</div> */}
			<section className="authPage">
				<div className="container">
					<div className="header">
						<h3>Login to your account</h3>
					</div>
					<form>
						<div className="inputTag">
							<label>Login As</label>
							<div>
								<input type="text" placeholder="abcd@gmail.com" />

								<FaUser />
							</div>
						</div>
						<div className="inputTag">
							<label>Password</label>
							<div>
								<input
									type="password"
									placeholder="Your Password"

								/>
								<MdLockPerson />
							</div>
						</div>
						<Link to="/Home">
						<button type="submit">
							Login
						</button>
						</Link>
						
						<Link to={"/RegistrationEmployee"}>Register Now</Link>
					</form>
				</div>
			</section>
		</>
	)
}
