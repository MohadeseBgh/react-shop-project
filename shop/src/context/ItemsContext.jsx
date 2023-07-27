import {createContext, useState} from "react";
import coffee from "../img/coffee3.png";

const defaultValue = undefined;
export const ItemsContext = createContext(defaultValue);

const ItemsProvider = (props) => {
    const [items, setItems] = useState( [
        {name:'Espresso',description:'Espresso is made by forcing nearly boiling water through finely-ground coffee beans',img:coffee,price:'$50' , counter:0},
        {name:'Latte',description:'Espresso is made by forcing nearly boiling water through finely-ground coffee beans',img:coffee,price:'$50' , counter:0},
        {name:'Black Coffee',description:'Espresso is made by forcing nearly boiling water through finely-ground coffee beans',img:coffee,price:'$50', counter:0},
        {name:'Mocha',description:'Espresso is made by forcing nearly boiling water through finely-ground coffee beans',img:coffee,price:'$50', counter:0},
        {name:'Americano',description:'Espresso is made by forcing nearly boiling water through finely-ground coffee beans',img:coffee,price:'$50', counter:0},
        {name:'Cappuccino',description:'Espresso is made by forcing nearly boiling water through finely-ground coffee beans',img:coffee,price:'$50', counter:0},
        {name:'Irish Coffee',description:'Espresso is made by forcing nearly boiling water through finely-ground coffee beans',img:coffee,price:'$50', counter:0},
        {name:'Affogato',description:'Espresso is made by forcing nearly boiling water through finely-ground coffee beans',img:coffee,price:'$50', counter:0}
    ])

    return (
        <ItemsContext.Provider value={[items, setItems]}>
            {props.children}
        </ItemsContext.Provider>
    );
}
export default ItemsProvider;