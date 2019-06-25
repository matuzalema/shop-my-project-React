import React from 'react';
// import { connect } from 'react-redux';
// import { CartProduct } from './CartProduct';
// import EmptyCart from './EmptyCart';
// import Cart from './Cart';
import "./CartProductsList.scss";
import { substractQuantity } from '../../actions/cartActions';

const CartProductsList = props => (
    <div>
        <div>
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
                                    <p className="cart-product-price">$ {product.price}</p>
                               </div>
                               <div className="cart-col cart-quantity">
                                   <button className="btn btn-quantity" onClick={() => props.addQuantity(product.id)}>+</button>
                                   Ilość {product.quantity}
                                   <button className="btn btn-quantity" onClick={() => props.substractQuantity(product.id)}>-</button>
                               </div>
                               <div className="cart-col">
                                   <button className="btn" onClick={() => props.removeCartProduct(product.id)}>Usuń</button>
                               </div>
                           </div>
                       </div>
                   )
                   
                })}
            </ul>
        </div>
    </div>
);
    
    
    // render() {
    //     console.log(this.props.cartContent)
    //     return (
    //         this.viewCart(this.props.cartContent.cartContent)
           
            // <div>{this.props.cartContent.map(product => product)}</div>
            // if(this.props.cartContent.length === 0){
            //     return <EmptyCart />
            // } else {
                    // return <CartProduct />
            // <div>
            //     <h1>Twój koszyk jest pełny</h1>
            // </div>
            // }
//         );
//     }
// }

export default CartProductsList;