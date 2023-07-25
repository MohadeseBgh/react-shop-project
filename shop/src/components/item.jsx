import {useContext} from "react";
import  {ItemContext} from "../context/ItemContext";

const Item = (props) => {
    const [item , setItem]=useContext(ItemContext)
    const chooseHandle=()=>{
        setItem(props.itemName)
        console.log(item)
    }
    return(
      <div
          onClick={chooseHandle}
      >
          {props.itemName}
      </div>
  )
}
export default Item;