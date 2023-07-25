import {createContext, useState} from "react";

const defaultValue = undefined;
export const ItemContext = createContext(defaultValue);

const ItemProvider = (props) => {
    const [item, setItem] = useState( "")

    return (
        <ItemContext.Provider value={[item, setItem]}>
            {props.children}
        </ItemContext.Provider>
    );
}
export default ItemProvider;