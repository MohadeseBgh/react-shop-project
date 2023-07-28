import {BsSearch} from "react-icons/bs";
import {useContext, useRef, useState} from "react";
import {ItemsContext} from "../context/ItemsContext";

const SearchBar = () => {
    const [input , setInput]=useState("");
    const [items, setItems] = useContext(ItemsContext )
    const ref = useRef(null);

    const handleChange = (e) => {
        setInput(e.target.value);
    }
    const searchInList=()=>{
        console.log(input)
        const nextItems = items.map( item0 => {
            if (item0.name.includes(input)) {
                return item0;
            }
        });
        const nextItems1 = nextItems.filter(( element )=> {
            return element !== undefined;
        });
        setItems(nextItems1);
        ref.current.value = '';
        setInput('');
    }
    const handleKeypress = e => {
        if (e.keyCode === 13) {
            searchInList();
        }
    };


    return(
      <div className={"flex flex-row border py-1 rounded-lg items-center shadow ml-8 "}>
          <textarea ref={ref} style={{resize: "none", outline: 'none'}} placeholder=" typing... "
                    onChange={handleChange}
                    className={" basis-11/12 rounded-l-xl overflow-x-hidden h-7 bg-color6 ml-2 text-color7 w-72  no-scrollbar"}
                    onKeyDown={handleKeypress}
          />
          <button className={"basis-1/12 text-lg text-color4 pr-2"} onClick={searchInList}>
              <BsSearch/>
          </button>
      </div>
  )
}
export default SearchBar;