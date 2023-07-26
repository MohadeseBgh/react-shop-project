import { useState} from "react";
import Item from "../components/item";
import coffee from '../img/coffee2.jpg'
const MenuList = () => {
    const [items,setItems]=useState([
        {name:'Espresso',description:'Espresso is made by forcing nearly boiling water through finely-ground coffee beans',img:coffee,price:'$50'},
        {name:'Latte',description:'Espresso is made by forcing nearly boiling water through finely-ground coffee beans',img:coffee,price:'$50'},
        {name:'Black Coffee',description:'Espresso is made by forcing nearly boiling water through finely-ground coffee beans',img:coffee,price:'$50'},
        {name:'Mocha',description:'Espresso is made by forcing nearly boiling water through finely-ground coffee beans',img:coffee,price:'$50'},
        {name:'Americano',description:'Espresso is made by forcing nearly boiling water through finely-ground coffee beans',img:coffee,price:'$50'},
        {name:'Cappuccino',description:'Espresso is made by forcing nearly boiling water through finely-ground coffee beans',img:coffee,price:'$50'},
        {name:'Irish Coffee',description:'Espresso is made by forcing nearly boiling water through finely-ground coffee beans',img:coffee,price:'$50'},
        {name:'Affogato',description:'Espresso is made by forcing nearly boiling water through finely-ground coffee beans',img:coffee,price:'$50'}
    ]);

  return(
      <div className={"flex flex-col gap-3 p-5 hover scrollbar-none"}>
          {items.map((value,index)=>(
                  <Item itemName={value.name} des={value.description} img={value.img} price={value.price} />
          ))}
      </div>
  )
}
export default MenuList