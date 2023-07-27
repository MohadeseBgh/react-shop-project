import {useContext, useState} from "react";
import coffee from "../img/coffee3.png";
import {ItemsContext} from "../context/ItemsContext";

const Collections = () => {
    const[coffe , setCoffe]=useState(false);
    const[tea , setTea]=useState(false);
    const[shake , setShake]=useState(false);

    const [items, setItems] = useContext(ItemsContext )
    const [allItems, setAllItems] = useState( [
        {name:'Espresso',description:'Espresso is made by forcing nearly boiling water through finely-ground coffee beans',img:coffee,price:'$50' , counter:0},
        {name:'Latte',description:'Espresso is made by forcing nearly boiling water through finely-ground coffee beans',img:coffee,price:'$50' , counter:0},
        {name:'Black Coffee',description:'Espresso is made by forcing nearly boiling water through finely-ground coffee beans',img:coffee,price:'$50', counter:0},
        {name:'Mocha',description:'Espresso is made by forcing nearly boiling water through finely-ground coffee beans',img:coffee,price:'$50', counter:0},
        {name:'Americano',description:'Espresso is made by forcing nearly boiling water through finely-ground coffee beans',img:coffee,price:'$50', counter:0},
        {name:'Cappuccino',description:'Espresso is made by forcing nearly boiling water through finely-ground coffee beans',img:coffee,price:'$50', counter:0},
        {name:'Irish Coffee',description:'Espresso is made by forcing nearly boiling water through finely-ground coffee beans',img:coffee,price:'$40', counter:0},
        {name:'Affogato',description:'Espresso is made by forcing nearly boiling water through finely-ground coffee beans',img:coffee,price:'$50', counter:0}
    ])
    const coffeeItems=()=>{
        setCoffe(true);
        setShake(false);
        setTea(false);

        const nextItems = allItems.map( item0 => {
            if (item0.description.includes('coffee')) {
                return item0;
            }
        });
        const nextItems1 = nextItems.filter(( element )=> {
            return element !== undefined;
        });
        setItems(nextItems1);

    }
    const teaItems=()=>{
        setCoffe(false);
        setShake(false);
        setTea(true);

        const nextItems = allItems.map( item0 => {
            if (item0.description.includes('coffee')) {
                return item0;
            }
        });
        const nextItems1 = nextItems.filter(( element )=> {
            return element !== undefined;
        });
        setItems(nextItems1);
    }
    const milkshakeItems=()=>{
        setCoffe(false);
        setShake(true);
        setTea(false);

        const nextItems = allItems.map( item0 => {
            if (item0.description.includes('coffee')) {
                return item0;
            }
        });
        const nextItems1 = nextItems.filter(( element )=> {
            return element !== undefined;
        });
        setItems(nextItems1);
    }

    return(
        <div className={"flex flex-row justify-center content-center gap-40 pt-3 pb-1 "}>
            <button className={`${coffe===true ? "text-color7" : "text-color4"} `}  onClick={coffeeItems}>Coffee</button>
            <button className={`${tea===true ? "text-color7" : "text-color4"} `} onClick={teaItems}>Tea</button>
            <button className={`${shake===true ? "text-color7" : "text-color4"} `} onClick={milkshakeItems}>MilkShake</button>
        </div>
    )
}
export default Collections;