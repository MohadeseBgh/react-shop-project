import React from "react";
import MenuList from "./pages/MenuList";
import ItemInfo from "./pages/ItemInfo";
import ChosenItemProvider from "./context/ChosenItemContext";
import NavBar from "./components/navBar";
import ItemsProvider from "./context/ItemsContext";
import CounterProvider from "./context/CounterContext";
import Collections from "./components/collections";

const App = () => {
    return (

        <>
            <ItemsProvider>
                <ChosenItemProvider>
                    <CounterProvider>
                        <div className={"flex flex-col items-center justify-center h-screen w-screen bg-[#CACACA] "}>
                            <div className={"basis-1/12 w-full"}>
                                <NavBar/>
                            </div>
                            <div className={"flex flex-row basis-11/12 w-full overflow-hidden"}>
                                <div className={"basis-3/12 bg-[#CACACA] overflow-auto no-scrollbar"}>
                                    <MenuList/>
                                </div>
                                <div className={"basis-9/12 bg-gradient-to-b from-[#CACACA] to-[#FCFAF1] overflow-auto no-scrollbar"}>
                                    <div className={"basis-1/12"}>
                                        <Collections/>
                                    </div>
                                    <div className={"11/12"}>
                                        <ItemInfo/>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </CounterProvider>
                </ChosenItemProvider>
            </ItemsProvider>
        </>
    );
};
export default App;