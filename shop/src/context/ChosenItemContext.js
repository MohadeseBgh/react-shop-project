import {createContext, useState} from "react";
import coffee from "../img/coffee3.png";

const defaultValue = undefined;
export const ChosenItemContext = createContext(defaultValue);

const ChosenItemProvider = (props) => {
    const [item, setItem] = useState( {name:"No coffee have chosen yet!",description:'',img: coffee,price:'', counter:0})

    return (
        <ChosenItemContext.Provider value={[item, setItem]}>
            {props.children}
        </ChosenItemContext.Provider>
    );
}
export default ChosenItemProvider;