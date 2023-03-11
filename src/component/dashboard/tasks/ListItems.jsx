import React from 'react'
import { TiDelete } from "react-icons/ti";

export default function ListItems(props) {

  return (
    <>
 
           
           <li className="text-list"> 
           <TiDelete className='icon' onClick={() => {
            props.onSelect(props.id);
           }}/> {props.item}
           </li>
   
    </>
  )
}
