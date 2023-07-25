import React from "react";
import MenuList from "./pages/MenuList";
import ItemInfo from "./pages/ItemInfo";
import ItemProvider from "./context/ItemContext";

const App = () => {
    return (

        <>
            <ItemProvider>
                <div className={"flex items-center justify-center h-screen w-screen bg-white"}>
                    <div className={"flex flex-row box-content h-2/3 w-7/12 border-2 rounded-lg border-black"}>
                        <div className={"basis-1/3 overflow-auto overflow-x-hidden bg-gradient-to-b from-[#FFC26F] to-[#F9E0BB]"}><MenuList/></div>
                        <div className={"basis-2/3 border-l-2 border-black rounded-lg bg-[#F9E0BB]"}><ItemInfo/></div>
                    </div>
                </div>
            </ItemProvider>
        </>
    );
};
export default App;