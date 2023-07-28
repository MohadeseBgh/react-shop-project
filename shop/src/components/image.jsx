import {useContext} from "react";
import {ChosenItemContext} from "../context/ChosenItemContext";

const Image = (props) => {
    const [item , setItem]=useContext(ChosenItemContext)
    const changeImage = () => {
        const item0={...item}
        item0.img=props.img;
        setItem(item0)
    }
  return(
      <div onClick={changeImage}>
          <img src={props.img} className={"h-24 w-32 rounded-3xl p-0.5 shadow-gray-500 shadow-inner"} alt={''}/>
      </div>
  )
}
export default Image;