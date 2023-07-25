import {useContext} from "react";
import  {ItemContext} from "../context/ItemContext";

const Item = (props) => {
    const [item , setItem]=useContext(ItemContext)
    const chooseHandle=()=>{
        setItem(props.itemName)
    }
    return(
      <div className={"text-2xl bg-blue-500 rounded-lg pl-3 hover:bg-sky-700"} onClick={chooseHandle}>
          {props.itemName}
      </div>
  )
}
export default Item;