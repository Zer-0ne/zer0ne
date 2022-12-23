import React from 'react'
import "./Navbar.css"
import logo from '../../media/zlogo.png'
import { NavLink } from "react-router-dom";
export default function Navbar() {
  
  return (
    <>
      <div className="phnLogo">
        ZERONE
      </div>
      <div className="navbarContainer">
        <img src={logo} className='Z' alt="" />
        <div className="navbarComponent">
          <div className="logo">
            <div className="logoContainer">
              <div className="logoDiv">
                ZERONE
              </div>
            </div>
          </div>
          <div className="list">
            <ul>
              <li><div className="listObj" id='home'><NavLink activeclassName='active' to='/zer0ne/'><i className="fa-solid fa-house"></i><p>Home</p></NavLink></div></li>
              <li><div className="listObj"><NavLink activeclassName='active' to='/zer0ne/about'><i className="fa-solid fa-user"></i><p>About</p></NavLink></div></li>
              <li><div className="listObj"><NavLink activeclassName='active' to='/zer0ne/project'><i className="fa-solid fa-bars-progress"></i><p>Projects</p></NavLink></div></li>
              <li><div className="listObj"><NavLink activeclassName='active' to='/zer0ne/portfolio'><i className="fa-solid fa-briefcase"></i><p>Portfolio</p></NavLink></div></li>
              <li><div className="listObj"><NavLink activeclassName='active' to='/zer0ne/contact'><i className="fa-sharp fa-solid fa-comments"></i><p>Contact</p></NavLink></div></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
