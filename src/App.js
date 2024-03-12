import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WizardForm from './pages/WizardForm';
import HomeIntro from './pages/HomeIntro';
import Home from './pages/Home';
import LoginEmployee from './pages/LoginEmployee';
import RegistrationEmployee from './pages/RegistrationEmployee';
import Forgot from './pages/Forgot';
import CompanyLogin from './pages/CompanyLogin';
import Job from './pages/Job';
// import Link from './p/Link';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <HomeIntro/> }></Route>
          <Route path='/LoginEmployee' element={ <LoginEmployee/> }></Route>
          <Route path='/RegistrationEmployee' element={ <RegistrationEmployee/> }></Route>
          <Route path='/Forgot' element={ <Forgot/> }></Route>
          <Route path='/WizardForm' element={ <WizardForm/> }></Route>
          <Route path='/Home' element={ <Home/> }></Route>
          <Route path='/CompanyLogin' element={ <CompanyLogin/> }></Route>
          <Route path='/Job' element={ <Job/> }></Route>
        </Routes>
      </BrowserRouter>
      {/* <Link></Link> */}
    </>
  );
}

export default App;
