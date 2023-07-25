import { useState} from "react";
import Item from "../components/item";

const MenuList = () => {
    const [items,setItems]=useState(["item1","item2","item3","item4","item5","item6","item7","item8","item9","item10"]);

  return(
      <div>
          {items.map((value,index)=>(
              <div>
                  <Item itemName={value}/>
              </div>

          ))}
      </div>
  )
}
export default MenuList