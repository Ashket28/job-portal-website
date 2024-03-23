import React from 'react'
import { FaHome, FaUserCircle ,FaCaretDown } from "react-icons/fa";
import { MdScreenSearchDesktop } from "react-icons/md";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { PiUsersThreeFill } from "react-icons/pi";
import { IoMdNotifications } from "react-icons/io";
import './Header.css';
import { Link } from 'react-router-dom';
export default function Header(props) {
  return (
    <>
      <div className='container-grid Header-body'>
        <div className='container'>
          <div className='row mainHome-nav'>
            <div className='col-6 mainHome-logo'>
              <div className='mainHome-logo-icon'>
                <i className="fa-solid fa-circle first-i" style={{ color: "rgb(171 255 230)" }}></i>
                <i className="fa-solid fa-circle second-i" style={{ color: "rgb(4 241 55)" }}></i>
              </div>
              <span><h1 className='mainHome-logo-name'>jobi</h1></span>
              <input className="mainHome-search-box" type="text"  placeholder="Search" />
            </div>
            <div className='col-5'>
              <div className='menu-link'>
                <ul>
                  <li>
                    <Link to="/Home" className='menu'>
                      <div className='menu-icon'> <FaHome size={24} /> </div>
                      <span>Home</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/Job" className='menu'>
                      <div className='menu-icon'> <MdScreenSearchDesktop size={24} /> </div>
                      <span>Jobs</span>
                    </Link>
                  </li>
                  <li>
                    <a href="/" className='menu'>
                      <div className='menu-icon'> <HiBuildingOffice2 size={24} />
                      </div> <span>Company</span>
                    </a>
                  </li>
                  <li>
                    <a href="/" className='menu'>
                      <div className='menu-icon'> <PiUsersThreeFill size={24} /> </div>
                      <span>About us</span>
                    </a>
                  </li>
                  <li>
                    <a href="/" className='menu'>
                      <div className='menu-icon'> <IoMdNotifications size={24} /> </div>
                      <span>Notifications</span>
                      <div className="notification-alert">3</div>
                    </a>
                  </li>
                  <li>
                    <a href="/" className='menu'>
                      <div className='menu-icon'> <FaUserCircle size={24} color='rgb(4, 241, 55)' /> </div>
                      <span>Me<FaCaretDown size={15} /></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-1'>
              <button className='mainHome-logout-btn' onClick={props.toggle}>
               Logout
              </button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
