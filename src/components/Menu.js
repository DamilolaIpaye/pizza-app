import React from 'react'
import ReactDOM from "react-dom/client";
import Pieza from "./Pieza"


const piezaData = [
    
            {
            name:"Pizza Focaccia",
            ingridients:"Bread with italian, olive oil and rosemary",
            price:"6",
            photoName:"",
            soldOut:false,
        },
            {
            name:"Pizza Magrgharita",
            ingridients:"Tomato and monarella",
            price:"10",
            photoName:"/image/pizza1-img.jpg",
            soldOut:false,
        },

        {
            name:"Pizza Spinaci",
            ingridients:"Tomato,monarella,spinach, and ricotta cheese",
            price:"12",
            photoName:"/image/pizza2-img.jpg",
            soldOut:false,
        },

        {
            name:"Pizza Funghi",
            ingridients:"Tomato,monarella, mushroom, and onion",
            price:"12",
            photoName:"/image/pizza3-image.jpg",
            soldOut:false,
        },

        {
            name:"Pizza Salamino",
            ingridients:"Tomato,monarella,pepperoni, and Ricotta cheese",
            price:"Sold Out",
            photoName:"/image/pizza4-img.jpg",
            soldOut:true,
        },
        {
            name:"Pizza Proscicitto",
            ingridients:"Tomato,monarella,ham, aragula and burrata cheese",
            price:"12",
            photoName:"/image/pizza5-image.jpg",
            soldOut:false,
        },
]
const Menu = () => {
    const piezas = piezaData;
    // const piezas = [];
    const numPiezas = piezas.length;

    return (
        <main className='menu'>
            <h2>OUR MENU</h2>
            <p>Authentic Italian cusine. 6 creative dishes to<br />choose from.our stove,all organic,<br />all delicious.</p>
           
            {numPiezas > 0  && (
                <ul className='pizzas'>
                    {piezas.map((pieza) => (
                        <Pieza piezaObj={pieza} key={pieza.name}/>
                    ))}
                </ul>
            )}

            {/* <Pieza 
            name="Pizza Focaccia"
            ingridients="Bread with italian, olive oil and rosemary"
            price="6"
            photoName="/image/pizza-img.jpg"/>

            <Pieza 
            name="Pizza Magrgharita"
            ingridients="Tomato and monarella"
            price="10"
            photoName="/image/pizza1-img.jpg"/>

        <Pieza 
            name="Pizza Spinaci"
            ingridients="Tomato,monarella,spinach, and ricotta cheese"
            price="12"
            photoName="/image/pizza2-img.jpg"/>

        <Pieza 
            name="Pizza Funghi"
            ingridients="Tomato,monarella, mushroom, and onion"
            price="12"
            photoName="/image/pizza3-image.jpg"/>

        <Pieza 
            name="Pizza Salamino"
            ingridients="Tomato,monarella,pepperoni, and Ricotta cheese"
            price="Sold Out"
            photoName="/image/pizza4-img.jpg"/>

<Pieza 
            name="Pizza Proscicitto"
            ingridients="Tomato,monarella,ham, aragula and burrata cheese"
            price="12"
            photoName="/image/pizza5-image.jpg"/> */}

        </main>
    )
}

export default Menu
