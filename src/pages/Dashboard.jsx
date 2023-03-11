import React from 'react'
import { useLocation} from "react-router-dom";

import SideBar from '../component/dashboard/SideBar'
import TopBar from '../component/dashboard/TopBar'
import InnerContent from '../component/dashboard/InnerContent'



export default function Dashboard() {


  const location = useLocation();
  // console.log("name",location.state.data1.name)
  const name = location.state.data1.name;
  return (
    <>
      <div className="full_container">
         <div className="inner_container">
               <SideBar name={name}/>
            {/* <!-- right content -->  */}
            <div id="content">
               <TopBar name={name}/>
               <InnerContent/>
            </div>
         </div>
      </div>
    </>
  )
}
