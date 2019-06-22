import React from 'react';
import "../../sass/_components.scss";

const EmptyCart = () => {
    return (
    <>
        <h1>Twój koszyk jest pusty</h1>
        <button className="btn" >Przejdź do zakupów</button>
    </>
    )
}

export default EmptyCart;