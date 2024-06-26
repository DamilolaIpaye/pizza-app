import React from 'react'
const hour = new Date().getHours();
const openHour = 12;
const closeHour = 22;
const isOpen = hour >= openHour && hour <= closeHour;
console.log(isOpen);

const Footer = () => {
    return (
<footer className='footer'>

    {isOpen && (
        <><div className='order'>
     <p>We are open until  {closeHour}:00. Come visit us or order online</p>
        </div><button className='btn'>Order now</button></>)
}
</footer>  );
};

export default Footer