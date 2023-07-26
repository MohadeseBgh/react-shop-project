import {IoCartOutline} from "react-icons/io5";

const NavBar = () => {
    return(
        <div className={"flex flex-row items-center justify-between"}>

            <div className={"font-bold text-2xl italic pl-3"}>
                {/*design icon in canva*/}
                Fillo Cafe
            </div>
            <div className={""}>
                order now!!!
            </div>
            <div className={"flex flex-row pr-5 items-center content-center justify-center"}>
                <button className={"m-2"}>
                    <IoCartOutline className={"text-2xl"}/>
                </button>
                <button className={"p-1 pl-4 pr-4 border-2 border-black rounded-lg m-2"}>
                    sign in
                </button>
            </div>

        </div>
    )
}
export default NavBar;