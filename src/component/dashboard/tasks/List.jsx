import React,{useState} from "react";
import ListItems from "./ListItems";

export default function List() {
    const [inputLst,setInputList] = useState(null);
    const [Items,setItems] = useState([]);
   
    const itemEvent = (event) => {
      setInputList(event.target.value);
    }
    const listOfItems = () => {
      setItems((oldItems) => {
        if (inputLst !== "" && oldItems !== ""){
          return [...oldItems,inputLst];
        }
        else{
          return [...oldItems];
        }
      })
      setInputList('');
    }
    const deleteItems = (id) => {
        console.log("deleted");
        setItems((oldItems) => {
            return oldItems.filter((arrElem, index) => {
                 return index !== id;
            })
        })
    }
  return (
    <>
      
        <div className="center-div">
          <input
            type="text"
            className="list-input"
            placeholder="Add Project Name"
            value={inputLst}
            onChange={itemEvent}
            required
          />
          <button className="list-btn" onClick={listOfItems}>
            {" "}
            +{" "}
          </button>
        </div>
        <ul>
          {Items.map((val,index) => {
             return <ListItems 
             key={index} 
             id={index} 
             item={val}
             onSelect={deleteItems}
             />
          })}
        </ul>

    
    </>
  );
}
