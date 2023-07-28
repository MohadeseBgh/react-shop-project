import {useContext, useState} from "react";
import {ChosenItemContext} from "../context/ChosenItemContext";
import coffee from "../img/coffee3.png";
import {CounterContext} from "../context/CounterContext";

const Counter = () => {
    const [counter, setCounter] = useContext(CounterContext);
    const [item, setItem] = useContext(ChosenItemContext)

    const increase = () => {
        setCounter((prevState) => {
            return prevState + 1;
        });
        setItem((prevState) => {
            return {
                name: prevState.name,
                description: prevState.description,
                img: prevState.img,
                price: prevState.price,
                counter: prevState.counter + 1
            };
        })
    };
    const decrease = () => {
        setCounter((prevState) => {
            return prevState - 1;
        });
        setItem((prevState) => {
            return {
                name: prevState.name,
                description: prevState.description,
                img: prevState.img,
                price: prevState.price,
                counter: prevState.counter - 1
            };
        })
    };
    return (
        <div>
            <div className={"flex flex-row border border-[#4A4A4A] rounded-3xl pl-5 pr-5 gap-3 bg-[#FFCD38]"}>
                <button className={"p-1 transition hover:-translate-1 hover:scale-125 duration-300"}
                        onClick={increase}>+
                </button>
                <p className={"p-2 m-1"}>{item.counter}</p>
                <button className={"p-1 transition hover:-translate-1 hover:scale-125 duration-300"}
                        onClick={decrease}>-
                </button>
            </div>
        </div>
    );
}
export default Counter;