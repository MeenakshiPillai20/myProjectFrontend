import React from "react";
import List from "./tasks/List";

export default function InnerContent() {
  
  return (
    <>
    
      {/* <!-- dashboard inner -->  */}
      <div className="midde_cont">
        <div className="container-fluid">
          <div className="row column_title">
            <div className="page_title">
              <h2>Dashboard</h2>
            </div>
            <div className="card-list">


            <div className="list h ">
                 <div className="list_title">
                   <h2 className="text-white">To Do</h2>
                 </div>
                 <List/>
              </div> 

              
              <div className="list h ">
                 <div className="list_title">
                   <h2 className="text-white">Doing</h2>
                 </div>
                 <List/>
              </div>

              

              <div className="list h ">
                 <div className="list_title">
                   <h2 className="text-white">Done</h2>
                 </div>
                 <List/>
              </div>
                           
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end dashboard inner --> */}
    </>
  );
}
