import {createContext, useState} from "react";
import coffee from "../img/coffee3.png";

const defaultValue = undefined;
export const ItemsContext = createContext(defaultValue);

const ItemsProvider = (props) => {
    const [items, setItems] = useState( [
        {name:'Espresso',description:'espresso is made by forcing nearly boiling water through finely-ground coffee beans',img:coffee,price:'$50' , counter:0},
        {name:'Latte',description:'A latte is an espresso with steamed milk and a dollop of milk foam on top. ',img:coffee,price:'$50' , counter:0},
        {name:'Black Coffee',description:'Black coffee is arguably the most common type of coffee drink out there. ',img:coffee,price:'$50', counter:0},
        {name:'Mocha',description:'Coffee and chocolate are two of the best things in the world. Mochas are espresso based drinks made with chocolate and whipped cream instead of foam',img:coffee,price:'$50', counter:0},
        {name:'Americano',description:'Its just espresso with hot water dripping over it.',img:coffee,price:'$50', counter:0},
        {name:'Cappuccino',description:'Cappuccinos are a classic Italian type of coffee drink made of espresso, steamed milk, and thick foam in equal parts',img:coffee,price:'$50', counter:0},
        {name:'Irish Coffee',description:'This hot beverage is made with espresso, whiskey, and cream.',img:coffee,price:'$40', counter:0},

    ])

    return (
        <ItemsContext.Provider value={[items, setItems]}>
            {props.children}
        </ItemsContext.Provider>
    );
}
export default ItemsProvider;