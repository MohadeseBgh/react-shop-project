import {createContext, useState} from "react";
import coffee from "../img/coffee3.png";

const defaultValue = undefined;
export const CounterContext = createContext(defaultValue);

const CounterProvider = (props) => {
    const [counter , setCounter]=useState(0);
    //we could save other data for our cart in this context too

    return (
        <CounterContext.Provider value={[counter, setCounter]}>
            {props.children}
        </CounterContext.Provider>
    );
}
export default CounterProvider;