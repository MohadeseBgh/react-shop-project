import {useContext, useState} from "react";
import {ChosenItemContext} from "../context/ChosenItemContext";
import coffee4 from '../img/coffee4.png'
import Counter from "../components/counter";
const ItemInfo = () => {
    const [item , setItem]=useContext(ChosenItemContext)

  return(
      <div className={"flex flex-col scrollbar-none"}>
          <div className={"flex content-center justify-center text-justify items-center border-gray-500 border-t basis-8/12 mx-5"}>
              <div className={"flex flex-col basis-1/2 h-full content-center justify-start items-center gap-20"}>
                  <h1 className={"text-5xl italic m-3 text-center"} >
                      {item.name}
                  </h1>
                  <div className={"p-6 text-lg text-[#343434]"}>
                      {item.description}
                  </div>
                  <div>
                      price : {item.price}
                  </div>
                  <Counter/>
              </div>
              <div className={"basis-1/2 flex flex-col "}>
                  <img src={item.img} className={"rounded-3xl p-1 shadow-inner drop-shadow-md shadow-gray-700 scale-90 "} alt={''}/>
                  <div className={"flex flex-row p-3 pr-5 gap-2"}>
                      <img src={item.img} className={"w-1/3 h-5/6 rounded-3xl p-1 shadow-gray-400 shadow-inner"} alt={''}/>
                      <img src={item.img} className={"w-1/3 h-5/6 rounded-3xl p-1 shadow-gray-400 shadow-inner"} alt={''}/>
                      <img src={item.img} className={"w-1/3 h-5/6 rounded-3xl p-1 shadow-gray-400 shadow-inner"} alt={''}/>
                  </div>
              </div>
          </div>
          <div className={"text-lg text-color5 border-b-2 border-b-color4 basis-1/12 p-1 mx-3"}>Details</div>
          <div className={"text-xs basis-3/12 p-1 mx-4"}>aSDFGTYHUJIKOLPKJHUGHYFDSFGHJKLKJHGFDSXCFGVHBJNKML</div>

      </div>

  )
}
export default ItemInfo;