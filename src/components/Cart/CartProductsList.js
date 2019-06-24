import React from 'react';
import { connect } from 'react-redux';
import { CartProduct } from './CartProduct';
import EmptyCart from './EmptyCart';
import Cart from './Cart';

const CartProductsList = props => (
    <div>
        <div>
            <ul>
                {props.cartContent.map((product, i) => {
                   return (
                       <div className="product-wrapper">
                           <div className="product-wrapper-letf">
                               <img
                                   src={product.img}
                                   alt={product.name}
                               />
                           </div>
                           <div className="product-wrapper-right">
                               <p className="product-inf">{product.inf}</p>
                               <h1 className="product-names">{product.name}</h1>
                               <p className="product-price">$ {product.price}</p>
                               <p className="product-description">{product.detail}</p>
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