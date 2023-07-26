import {useContext} from "react";
import  {ItemContext} from "../context/ItemContext";
import cafeIcone from "../img/cafe.png";
import coffee from '../img/coffee2.jpg'

const Item = (props) => {
    const [item , setItem]=useContext(ItemContext)
    const chooseHandle=()=>{
         setItem({name:props.itemName,description:props.des, img:props.img ,price:props.price})
    }
    return(
        <div className={"bg-[#C38154] rounded-lg hover:bg-[#884A39] p-2 py-5 flex flex-row items-center"} onClick={chooseHandle}>
            <img src={props.img} className={"h-full w-20 "}/>
            <div className={"text-2xl "} >
                {props.itemName}
            </div>
        </div>

  )
}
export default Item;