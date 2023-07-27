import {IoCartOutline} from "react-icons/io5";
import cafeIcone from '../img/cafe.png'
import {useContext} from "react";
import {CounterContext} from "../context/CounterContext";
const NavBar = () => {
    const [counter , setCounter]=useContext(CounterContext);

    return(
        <div className={"flex flex-row items-center justify-between"}>

            <div className={"flex flex-row gap-2 pl-3 mt-1 justify-center content-center items-center"}>
                <img src={cafeIcone} className={"h-full w-20 items-center "}/>
                <h1 className={"text-3xl italic font-bold "} >Fillo Cafe</h1>
            </div>
            <div className={"animate-bounce"}>
                Order Now!!!
            </div>
            <div className={"flex flex-row pr-5 items-center content-center justify-center"}>
                <button className={"flex flex-col m-2 transition hover:-translate-1 hover:scale-125 duration-300 relative pb-1 pr-1.5"}>
                    <IoCartOutline className={"text-2xl "}/>
                    <span className={"text-xs absolute bottom-0 right-0 bg-[#E6B31E] rounded-full px-1"}>{counter}</span>
                </button>

                <button className={"p-1 pl-4 pr-4 border-2 border-[#343434] rounded-lg m-2 hover:bg-[#343434] hover:text-white"}>
                    Sign In
                </button>
            </div>

        </div>
    )
}
export default NavBar;