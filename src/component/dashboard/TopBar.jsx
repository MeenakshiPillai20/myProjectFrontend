import React from 'react'
import { Button } from 'react-bootstrap'
import logo from '../../images/logo2bg.png' 

import { useNavigate } from "react-router-dom";

export default function TopBar ({name}) {
   const navigate = useNavigate();
  function handleLogout()
  {
   navigate('/');
 };
  return (
    <>
      {/* <!-- topbar --> */}
      
      <div className="topbar">
                  <nav className="navbar navbar-expand-lg navbar-light">
                     <div className="full">
                        <button type="button" id="sidebarCollapse" className="sidebar_toggle"><i className="fa fa-bars"></i></button>
                        <div className="logo_section">
                           <a href="#link"><img className="img-responsive" src={logo} alt="logo" /></a>
                        </div>
                        <div className="right_topbar">
                           <div className="icon_info">
                              <ul>
                                 
                              <Button variant="light" onClick={handleLogout} className="ms-5 logout"> Logout </Button>
                              </ul>
                              <ul className="user_profile_dd">
                                 <li>
                                    <a href="#link" className="dropdown-toggle" data-toggle="dropdown">
                                       {/* <img className="img-responsive rounded-circle" src={user} alt="user" /> */}
                                       <span className="name_user">{name}</span></a>
                                    <div className="dropdown-menu">
                                       <a className="dropdown-item" href="#link">My Profile</a>
                                       <a className="dropdown-item" href="#link">Settings</a>
                                       <a className="dropdown-item" href="#link">Help</a>
                                       <a className="dropdown-item" href="#link"><span>Log Out</span> <i className="fa fa-sign-out"></i></a>
                                    </div>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </nav>
               </div>
                {/* <!-- end topbar --> */}
    </>
  )
}
