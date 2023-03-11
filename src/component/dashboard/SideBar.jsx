import React from 'react'
import logoIcon from '../../images/logo_icon.png'




export default function SideBar({name}) {


  return (
    <>
     {/* <!-- Sidebar  --> */}
     <nav id="sidebar">
               <div className="sidebar_blog_1">
                  <div className="sidebar-header">
                     <div className="logo_section">
                        <a href="#link"><img className="logo_icon img-responsive" src={logoIcon} alt="logo icon" /></a>
                     </div>
                  </div>
                  <div className="sidebar_user_info">
                     <div className="icon_setting"></div>
                     <div className="user_profle_side">
                        {/* <div className="user_img"><img className="img-responsive" src={user} alt="user img1" /></div> */}
                        <div className="user_info pb-4">
                           <h3>🌟Welcome</h3>
                           <h6>{name}</h6>
                          
                        </div>
                     </div>
                  </div>
               </div>
               <div className="sidebar_blog_2">
                  <h4>General</h4>
                  <ul className="list-unstyled components">
                     <li className="active">
                        <a href="#dashboard" ><i className="fa fa-dashboard yellow_color"></i> <span>Dashboard</span></a>
                     </li>
                   
                    
                     <li><a href="#link"><i className="fa fa-table purple_color2"></i> <span>Tables</span></a></li>
                     <li>
                        <a href="#apps" ><i className="fa fa-object-group blue2_color"></i> <span>Apps</span></a>
                       
                     </li>
                     <li><a href="#link"><i className="fa fa-briefcase blue1_color"></i> <span>Pricing Tables</span></a></li>
                     <li>
                        <a href="#link">
                        <i className="fa fa-paper-plane red_color"></i> <span>Contact</span></a>
                     </li>
                     
                    
                  </ul>
               </div>
            </nav>
         {/* <!-- end sidebar --> */}
    </>
  )
}
