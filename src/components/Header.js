import React from 'react'
import { FaHome, FaUserCircle } from "react-icons/fa";
import { MdScreenSearchDesktop } from "react-icons/md";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { PiUsersThreeFill } from "react-icons/pi";
import './Header.css';
export default function Header(props) {
  return (
    <>
      <div className='container-grid'>
        <div className='container'>
          <div className='row mainHome-nav'>
            <div className='col-3 mainHome-logo'>
              <div className='mainHome-logo-icon'>
                <i className="fa-solid fa-circle first-i" style={{ color: "rgb(171 255 230)" }}></i>
                <i className="fa-solid fa-circle second-i" style={{ color: "rgb(4 241 55)" }}></i>
              </div>
              <span><h2 className='mainHome-logo-name'>jobi</h2></span>
            </div>
            <div className='col-6'>
              <div className='menu-link'>
                <ul>
                  <li>
                    <a href="/" className='menu'>
                      <div className='menu-icon'> <FaHome size={20} /> </div>
                      <span>Home</span>
                    </a>
                  </li>
                  <li>
                    <a href="/" className='menu'>
                      <div className='menu-icon'> <MdScreenSearchDesktop size={20} /> </div>
                      <span>Jobs</span>
                    </a>
                  </li>
                  <li>
                    <a href="/" className='menu'>
                      <div className='menu-icon'> <HiBuildingOffice2 size={20} />
                      </div> <span>Company</span>
                    </a>
                  </li>
                  <li>
                    <a href="/" className='menu'>
                      <div className='menu-icon'> <PiUsersThreeFill size={20} /> </div>
                      <span>About us</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-3'>

              <button className='profile' onClick={props.toggle}>
                <span>
                  Ashket
                </span>
                <FaUserCircle size={33} color='rgb(4, 241, 55)' />
              </button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
