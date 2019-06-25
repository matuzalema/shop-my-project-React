import React from "react";
// import EmptyCart from "./EmptyCart";
import { CartProduct } from "./CartProduct";
import { connect } from "react-redux";
import CartProductsList from "./CartProductsList";
import "./Cart.scss";

class Cart extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            products: props.products,
            cartContent: props.cartContent
        };
    }

    render() {
        // console.log(this.props.cartContent)
        return (
            <div>
                <h1 className="cart-header">Twój koszyk</h1>
                
                <CartProductsList cartContent={this.props.cartContent}/>
                {/* <EmptyCart />               */}
            {/* <CartProduct /> */}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    products: state.products,
    cartContent: state.cartContent.cartContent
});

export default connect(mapStateToProps)(Cart);