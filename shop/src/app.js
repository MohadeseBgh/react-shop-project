import React from "react";
import MenuList from "./pages/MenuList";
import ItemInfo from "./pages/ItemInfo";
import ItemProvider from "./context/ItemContext";
import NavBar from "./components/navBar";

const App = () => {
    return (

        <>
            <ItemProvider>
                <div className={"flex flex-col items-center justify-center h-screen w-screen bg-white"}>
                        <div className={"flex flex-row basis-1/12 w-full"}>
                            <NavBar/>
                        </div>
                        <div className={"flex flex-row basis-11/12 w-full"}>
                            <div className={"basis-1/3 overflow-auto overflow-x-hidden bg-gradient-to-b from-[#FFC26F] to-[#F9E0BB]"}>
                                <MenuList/>
                            </div>
                            <div className={"basis-2/3 border-l-2 border-black rounded-lg bg-[#F9E0BB]"}>
                                <ItemInfo/>
                            </div>
                        </div>
                </div>
            </ItemProvider>
        </>
    );
};
export default App;