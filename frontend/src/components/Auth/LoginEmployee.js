import React, { useState,useContext } from "react";
import './LoginEmployee.css'
import { FaUser } from "react-icons/fa";
import { MdLockPerson } from "react-icons/md";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { Context } from "../../index"
export default function LoginEmployee() {


	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
  
	const { isAuthorized, setIsAuthorized, user, setUser } = useContext(Context);
  
	const hendleLogin = async (e) => {
	  e.preventDefault();
	  try {
		const { data } = await axios.post("http://localhost:4000/api/v1/user/login", { email, password },
		  {
			headers: { "Content-Type": "application/json", },
			withCredentials: true,
		  }
		);
		console.log(data);
		toast.success(data.message);
		setEmail("");
		setPassword("");
		setIsAuthorized(true);
	  } catch (error) {
		toast.error(error.response.data.message);
	  }
	};
	console.log("login" + setIsAuthorized)
	if (isAuthorized) {
	  return <Navigate to={'/Home'} />
	}


	return (
		<>
			<section className="authPage">
				<div className="container">
					<div className="header">
						<h3>Login to your account</h3>
					</div>
					<form>
						<div className="inputTag">
							<label>Login As</label>
							<div>
							<FaUser />
								<input type="email" 
								placeholder="abcd@gmail.com" 
								onChange={(e) => setEmail(e.target.value)} value={email} required/>
								<i class="True_validator" ><span></span><span></span></i>
							</div>
						</div>
						<div className="inputTag">
							<label>Password</label>
							<div>
							<MdLockPerson />
								<input
									type="password"
									placeholder="Your Password"
									onChange={(e) => setPassword(e.target.value)} value={password} required/>
									<i class="True_validator" ><span></span><span></span></i>
							</div>
						</div>
					
						<button type="submit" onClick={hendleLogin}>
							Login
						</button>
					
						
						<Link to={"/RegistrationEmployee"}>Register Now</Link>
					</form>
				</div>
			</section>
		</>
	)
}
