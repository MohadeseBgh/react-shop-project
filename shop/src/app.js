import React from "react";
import MenuList from "./pages/MenuList";
import ItemInfo from "./pages/ItemInfo";
import ItemProvider from "./context/ItemContext";
import NavBar from "./components/navBar";

const App = () => {
    return (

        <>
            <ItemProvider>
                <div className={"flex flex-col items-center justify-center h-screen w-screen bg-[#CACACA] "}>
                        <div className={"basis-1/12 w-full"}>
                            <NavBar/>
                        </div>
                        <div className={"flex flex-row basis-11/12 w-full overflow-hidden"}>
                            <div className={"basis-3/12 bg-[#CACACA] overflow-auto no-scrollbar"}>
                                <MenuList/>
                            </div>
                            <div className={"basis-9/12 bg-gradient-to-b from-[#CACACA] to-[#FCFAF1] "}>
                                <ItemInfo/>
                            </div>
                        </div>
                </div>
            </ItemProvider>
        </>
    );
};
export default App;