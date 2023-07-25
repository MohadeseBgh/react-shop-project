import {useContext} from "react";
import {ItemContext} from "../context/ItemContext";

const ItemInfo = () => {
    const [item , setItem]=useContext(ItemContext)
  return(
      <div className={"flex text-5xl content-center justify-center text-justify items-center p-4"}>
          {item}
      </div>
  )
}
export default ItemInfo;