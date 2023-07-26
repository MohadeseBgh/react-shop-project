import {useContext} from "react";
import  {ItemContext} from "../context/ItemContext";

const Item = (props) => {
    const [item , setItem]=useContext(ItemContext)
    const chooseHandle=()=>{
        setItem(props.itemName)
    }
    return(
      <div className={"text-2xl bg-[#C38154] rounded-lg pl-3 hover:bg-[#884A39]"} onClick={chooseHandle}>
          {props.itemName}
      </div>
  )
}
export default Item;