import {useContext, useState} from "react";
import Item from "../components/item";
import coffee from '../img/coffee3.png'
import  {ItemsContext} from "../context/ItemsContext";
const MenuList = () => {
    const [items,setItems]=useContext(ItemsContext);

  return(
      <div className={"flex flex-col gap-3 p-5 hover scrollbar-none"}>
          {items.map((value,index)=>(
                  <Item itemName={value.name} des={value.description} img={value.img} price={value.price} counter={value.counter}/>
          ))}
      </div>
  )
}
export default MenuList