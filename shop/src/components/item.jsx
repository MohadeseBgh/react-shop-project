import {useContext} from "react";
import {ChosenItemContext} from "../context/ChosenItemContext";
import cafeIcone from "../img/cafe.png";
import coffee from '../img/coffee2.jpg'
import {BsCart} from "react-icons/bs";
import {ItemsContext} from "../context/ItemsContext";

const Item = (props) => {
    const [item, setItem] = useContext(ChosenItemContext);
    const [items, setItems]=useContext(ItemsContext);

    const chooseHandle = () => {
        const nextItems = items.map(item0 => {
            if (item0.name !== item.name) {
                return item0;
            } else {
                return {
                    ...item0,
                    counter: item.counter,
                };
            }
        });
        setItems(nextItems);
        setItem({name: props.itemName, description: props.des, img: props.img, price: props.price ,counter: props.counter})
    }
    return (

        <div className={"parent"} onClick={chooseHandle}>
            <div className={"bg-[#d3a317] rounded-t-3xl rounded-r-3xl  p-2 h-32 flex flex-row items-center child "}>
                <img src={props.img} className={"h-full w-32 rounded-3xl p-1"}/>
                <div className={"text-2xl ml-2"}>
                    {props.itemName}
                </div>
            </div>
            <div className={"flex flex-row bg-[#CACACA] "}>
                <div className={"text-xs p-2 bg-[#d3a317] rounded-b-3xl rounded-tr-sm child hover:shadow-xl shadow-gray-900 grow"}>
                    {props.des}
                </div>
                <button className={"bg-[#CACACA] p-3 rounded-3xl "}>
                        <BsCart className={"bg-[#4A4A4A] text-5xl rounded-xl p-3 transition hover:-translate-1 hover:scale-110 duration-300 text-color6"}/>
                </button>
            </div>
        </div>

    )
}
export default Item;