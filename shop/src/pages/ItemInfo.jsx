import {useContext, useState} from "react";
import {ChosenItemContext} from "../context/ChosenItemContext";
import coffee4 from '../img/coffee4.png';
import coffee3 from '../img/coffee3.png';
import coffee5 from '../img/coffee5.png'
import Counter from "../components/counter";
import Image from "../components/image";
const ItemInfo = () => {
    const [item , setItem]=useContext(ChosenItemContext)
    const [images , setimges]=useState([coffee4,coffee3,coffee5]);
  return(
      <div className={"flex flex-col scrollbar-none"}>
          <div className={"flex content-center justify-center text-justify items-center border-gray-500 border-t basis-9/12 mx-6"}>
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
              <div className={"basis-1/2 flex flex-col-reverse justify-center items-center content-center"}>
                  <div className={"flex flex-row mx-1 gap-2 items-center content-center justify-center"}>
                      {images.map((value, index) => (
                          <Image img={value} key={index} />
                      ))}
                  </div>
                  <img src={item.img} className={"rounded-3xl shadow-lg shadow-gray-500 h-80 w-10/12 mb-4"} alt={''}/>
              </div>
          </div>
          <div className={"text-lg text-color5 border-b-2 border-b-color4 basis-1/12 p-1 mx-3"}>Details</div>
          <div className={"text-xs basis-2/12 p-1 mx-4 mt-1 break-words "}>aSDFGTYHUJIKOLPKJHUGHYFDSFGHJKLKJHGFDSXCFGVHBJNKML
              aSDFGTYHUJIKOLPKJHUGHYFDSFGHJKLKJHGFDSXCFGVHBJNKMLaSDFGTYHUJIKOLP
          </div>
      </div>

  )
}
export default ItemInfo;