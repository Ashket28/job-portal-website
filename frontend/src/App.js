import React, { useContext, useEffect } from "react";
import './App.css';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import { Context } from './index';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import WizardForm from './components/pages/WizardForm';
import HomeIntro from './components/Home/HomeIntro';
import Home from './components/Home/Home';
import LoginEmployee from './components/Auth/LoginEmployee';
import RegistrationEmployee from './components/Auth/RegistrationEmployee';
import Forgot from './components/pages/Forgot';
import CompanyLogin from './components/Auth/CompanyLogin';
import Job from './components/Job/Job';
import NotFound from "./components/NotFound/NotFound";
function App() {

  const { isAuthorized, setIsAuthorized, setUser } = useContext(Context);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/v1/user/getuser",{withCredentials: true,});
        setUser(response.data.user);
        setIsAuthorized(true);
      } catch (error) {
        setIsAuthorized(false);
      }
    };
    fetchUser();
  }, [isAuthorized]);


  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomeIntro />}></Route>
            <Route path='/LoginEmployee' element={<LoginEmployee />}></Route>
            <Route path='/RegistrationEmployee' element={<RegistrationEmployee />}></Route>
            <Route path='/Forgot' element={<Forgot />}></Route>
            <Route path='/WizardForm' element={<WizardForm />}></Route>
            <Route path='/Home' element={<Home />}></Route>
            <Route path='/CompanyLogin' element={<CompanyLogin />}></Route>
            <Route path='/Job' element={<Job />}></Route>
            <Route  path="*" element={<NotFound />} />
          </Routes>
          <Toaster />
      </BrowserRouter>
    </>
  );
}

export default App;
