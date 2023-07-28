import React from "react";
import MenuList from "./pages/MenuList";
import ItemInfo from "./pages/ItemInfo";
import ChosenItemProvider from "./context/ChosenItemContext";
import NavBar from "./components/navBar";
import ItemsProvider from "./context/ItemsContext";
import CounterProvider from "./context/CounterContext";
import Collections from "./components/collections";
import Home from "./pages/Home";

const App = () => {
    return (

        <>
            <ItemsProvider>
                <ChosenItemProvider>
                    <CounterProvider>
                        <Home/>
                    </CounterProvider>
                </ChosenItemProvider>
            </ItemsProvider>
        </>
    );
};
export default App;