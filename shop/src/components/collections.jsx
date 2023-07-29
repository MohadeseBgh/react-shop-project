import {useContext, useState} from "react";
import coffee from "../img/coffee3.png";
import {ItemsContext} from "../context/ItemsContext";
import {ChosenItemContext} from "../context/ChosenItemContext";

const Collections = () => {
    const [chosen, setChosen] = useState({coffee: false, tea: false, shake: false, all: false});
    const [item, setItem] = useContext(ChosenItemContext);
    const [items, setItems] = useContext(ItemsContext)
    const [allItems, setAllItems] = useState([
        {
            name: 'Espresso',
            description: 'espresso is made by forcing nearly boiling water through finely-ground coffee beans',
            img: coffee,
            price: '$50',
            counter: 0
        },
        {
            name: 'Latte',
            description: 'A latte is an espresso with milk and a dollop of milk foam on top. ',
            img: coffee,
            price: '$50',
            counter: 0
        },
        {
            name: 'Black Coffee',
            description: 'Black coffee is arguably the most common type of coffee drink out there. ',
            img: coffee,
            price: '$50',
            counter: 0
        },
        {
            name: 'Mocha',
            description: 'Coffee and chocolate are two of the best things in the world. Mochas are espresso based drinks made with chocolate and whipped cream.',
            img: coffee,
            price: '$50',
            counter: 0
        },
        {
            name: 'Americano',
            description: 'Its just espresso with hot water dripping over it.',
            img: coffee,
            price: '$50',
            counter: 0
        },
        {
            name: 'Cappuccino',
            description: 'Cappuccinos are a classic Italian type of coffee drink made of espresso, milk, and thick foam in equal parts',
            img: coffee,
            price: '$50',
            counter: 0
        },
        {
            name: 'Irish Coffee',
            description: 'This hot beverage is made with espresso, whiskey, and cream.',
            img: coffee,
            price: '$40',
            counter: 0
        },
        {
            name: 'Affogato',
            description: 'It usually takes the form of a scoop of plain milk-flavored or vanilla gelato or ice cream topped or "drowned" with a shot of hot espresso.',
            img: coffee,
            price: '$50',
            counter: 0
        },
        {
            name: 'Black tea',
            description: 'To produce black tea, tea leaves are harvested, wilted, and then lightly crushed.',
            img: coffee,
            price: '$50',
            counter: 0
        },
        {
            name: 'Green tea',
            description: 'Green tea is another type of tea made from the camellia sinensis plant.',
            img: coffee,
            price: '$50',
            counter: 0
        },
        {
            name: 'White tea',
            description: 'White tea is a delicate, minimally processed tea that is highly sought after by connoisseurs.',
            img: coffee,
            price: '$50',
            counter: 0
        },
        {
            name: 'Vanilla special',
            description: 'Blend 1 tsp vanilla bean paste with the Basic milkshake.',
            img: coffee,
            price: '$50',
            counter: 0
        },
        {
            name: 'Strawberry shake',
            description: 'Stir 10 pink marshmallows with 1 tbs milk in a small saucepan over medium heat until melted for this milkshake.',
            img: coffee,
            price: '$50',
            counter: 0
        },
        {
            name: 'Choc malt',
            description: 'Basic milkshake, using chocolate ice-cream and a little vanilla.',
            img: coffee,
            price: '$50',
            counter: 0
        },
        {
            name: 'Banana milkshake',
            description: 'Banana milkshake has creamy vanilla ice cream, a pinch of cinnamon and a swizzle of whipped cream.',
            img: coffee,
            price: '$50',
            counter: 0
        },

    ])
    const coffeeItems = () => {
        setChosen({coffee: true, tea: false, shake: false, all: false})
        const nextItems = allItems.map(item0 => {
            if (item0.description.includes('espresso')) {
                return item0;
            }
        });
        const nextItems1 = nextItems.filter((element) => {
            return element !== undefined;
        });
        setItems(nextItems1);

    }
    const teaItems = () => {
        setChosen({coffee: false, tea: true, shake: false, all: false})

        const nextItems = allItems.map(item0 => {
            if (item0.description.includes('tea')) {
                return item0;
            }
        });
        const nextItems1 = nextItems.filter((element) => {
            return element !== undefined;
        });
        setItems(nextItems1);
    }
    const milkshakeItems = () => {
        setChosen({coffee: false, tea: false, shake: true, all: false})

        const nextItems = allItems.map(item0 => {
            if (item0.description.includes('milkshake')) {
                return item0;
            }
        });
        const nextItems1 = nextItems.filter((element) => {
            return element !== undefined;
        });
        setItems(nextItems1);
    }
    const allItem = () => {
        setChosen({coffee: false, tea: false, shake: false, all: true})
        setItems(allItems);

    }
    return (
        <div className={"flex flex-row justify-center content-center gap-40 pt-5 pb-2 "}>
            <button className={`${chosen.all === true ? "text-color7" : "text-color4"} `} onClick={allItem}>AllItems</button>
            <button className={`${chosen.coffee === true ? "text-color7" : "text-color4"} `}
                    onClick={coffeeItems}>Coffee
            </button>
            <button className={`${chosen.tea === true ? "text-color7" : "text-color4"} `} onClick={teaItems}>Tea</button>
            <button className={`${chosen.shake === true ? "text-color7" : "text-color4"} `}
                    onClick={milkshakeItems}>MilkShake
            </button>

        </div>
    )
}
export default Collections;