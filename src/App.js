import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import WizardForm from './pages/WizardForm';
import Home from './pages/Home';
import Sidebar from './components/Sidebar';
import LoginEmployee from './pages/LoginEmployee';
import RegistrationEmployee from './pages/RegistrationEmployee';
import Forgot from './pages/Forgot';
import CompanyLogin from './pages/CompanyLogin';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home/> }></Route>
          <Route path='/LoginEmployee' element={ <LoginEmployee/> }></Route>
          <Route path='/RegistrationEmployee' element={ <RegistrationEmployee/> }></Route>
          <Route path='/Forgot' element={ <Forgot/> }></Route>
          <Route path='/WizardForm' element={ <WizardForm/> }></Route>
          <Route path='/Sidebar' element={ <Sidebar/> }></Route>
          <Route path='/CompanyLogin' element={ <CompanyLogin/> }></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
