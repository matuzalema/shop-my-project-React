import React from 'react';
import "./CartProductsList.scss";

const CartProductsList = props => (   
    <ul>
        {props.cartContent.map((product, i) => {
            return (
                <div className="cart-product-wrapper">
                    <div className="cart-product-wrapper-letf">
                        <img className="cart-img"
                            src={product.img}
                            alt={product.name}
                        />
                    </div>
                    <div className="cart-product-wrapper-right">
                        <div className="cart-col">
                            <h1 className="cart-product-names">{product.name}</h1>
                            <p className="cart-product-description">{product.desc}</p>
                        </div>
                        <div className="cart-col">
                            <p className="cart-product-price">{product.price} PLN</p>
                        </div>
                        <div className="cart-col cart-quantity">
                            <button className="button button-quantity" onClick={() => props.addQuantity(product.id)}>+</button>
                            Ilość {product.quantity}
                            <button className="button button-quantity" onClick={() => props.substractQuantity(product.id)}>-</button>
                        </div>
                        <div className="cart-col">
                            <button className="button" onClick={() => props.removeCartProduct(product.id)}>Usuń</button>
                        </div>
                    </div>
                </div>
            ) 
        })}
    </ul>
);
    
export default CartProductsList;