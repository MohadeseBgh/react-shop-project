import React from "react";
import MenuList from "./pages/MenuList";
import ItemInfo from "./pages/ItemInfo";

const App = () => {
    return(
        <>
            <div className={"flex items-center justify-center h-screen w-screen bg-blue-200 flex-row"}>
                <div className={"basis-1/4"}><MenuList/></div>
                <div className={"basis-3/4"}><ItemInfo/></div>
            </div>
        </>
    );
};
export default App;