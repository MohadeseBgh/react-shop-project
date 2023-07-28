import NavBar from "../components/navBar";
import MenuList from "./MenuList";
import Collections from "../components/collections";
import ItemInfo from "./ItemInfo";
import React from "react";
import SearchBar from "../components/searchBar";

const Home = () => {
  return(
      <div className={"flex flex-col items-center justify-center h-screen w-screen bg-[#CACACA] "}>
          <div className={"basis-1/12 w-full"}>
              <NavBar/>
          </div>
          <div className={"flex flex-row basis-11/12 w-full overflow-hidden "}>
              <div className={"basis-3/12 overflow-auto no-scrollbar mt-10"}>
                  <div className={"flex items-center content-center justify-center mt-5 basis-2/12 absolute bg-color6 top-14 pr-7 pb-1"}>
                      <SearchBar/>
                  </div>
                  <div className={" bg-[#CACACA] "}>
                      <MenuList/>
                  </div>
              </div>
              <div className={"basis-9/12 bg-gradient-to-b from-[#CACACA] to-[#FCFAF1] overflow-auto overflow-x-hidden  no-scrollbar"}>
                  <div className={"basis-3/12"}>
                      <Collections/>
                  </div>
                  <div className={"basis-9/12"}>
                      <ItemInfo/>
                  </div>

              </div>
          </div>
      </div>
  )
}
export default Home;