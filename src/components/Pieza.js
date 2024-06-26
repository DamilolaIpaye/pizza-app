import React from 'react'

const Pieza = (prop) => {
    console.log(prop);

    return (
  <li className='pizza'>
    <img scr={prop.piezaObj.photoName} alt={prop.piezaObj.name}/>   
    <div>
    <h3>{prop.piezaObj.name}</h3>
    <p>{prop.piezaObj.ingridients}</p> 
    <span>{prop.piezaObj.price}</span>
    </div>
 </li>
    )
}

export default Pieza