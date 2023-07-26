import {IoCartOutline} from "react-icons/io5";
import cafeIcone from '../img/cafe.png'
const NavBar = () => {
    return(
        <div className={"flex flex-row items-center justify-between"}>

            <div className={"flex flex-row gap-2 pl-3 mt-1 justify-center content-center items-center"}>
                <img src={cafeIcone} className={"h-full w-20 items-center "}/>
                <h1 className={"text-3xl italic font-bold "} >Fillo Cafe</h1>
            </div>
            <div className={"animate-bounce"}>
                order now!!!
            </div>
            <div className={"flex flex-row pr-5 items-center content-center justify-center"}>
                <button className={"m-2 transition hover:-translate-1 hover:scale-125 duration-300"}>
                    <IoCartOutline className={"text-2xl "}/>
                </button>
                <button className={"p-1 pl-4 pr-4 border-2 border-[#343434] rounded-lg m-2 hover:bg-[#343434] hover:text-white"}>
                    sign in
                </button>
            </div>

        </div>
    )
}
export default NavBar;