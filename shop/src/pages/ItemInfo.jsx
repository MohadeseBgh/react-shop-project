import {useContext, useState} from "react";
import {ItemContext} from "../context/ItemContext";

const ItemInfo = () => {
    const [item , setItem]=useContext(ItemContext)
    const [counter , setCounter]=useState(0);

    const increase = () => {
      setCounter((prevState)=>{
          return prevState+1;
      });
    };
    const decrease = () => {
        setCounter((prevState)=>{
            return prevState-1;
        });
    };
  return(
      <div className={"flex content-center justify-center text-justify items-center m-2 border-black border-b border-t h-5/6"}>
          <div className={"flex flex-col basis-1/2 h-full content-center justify-start items-center gap-20"}>
              <h1 className={"text-5xl italic mt-3"} >
                  {item.name}
              </h1>
              <div className={"p-6 text-lg text-[#343434]"}>
                  {item.description}
              </div>
              <div>
                  price : {item.price}
              </div>
              <div className={"flex flex-row border border-[#4A4A4A] rounded-3xl pl-5 pr-5 gap-3 bg-[#FFDD67]"}>
                  <button className={"p-1"} onClick={increase}>+</button>
                  <p className={"p-2 m-1"}>{counter}</p>
                  <button className={"p-1"} onClick={decrease}>-</button>
              </div>
          </div>
          <div className={"basis-1/2"}>
              <img src={item.img} className={"rounded-3xl p-1"} alt={''}/>
          </div>

      </div>
  )
}
export default ItemInfo;