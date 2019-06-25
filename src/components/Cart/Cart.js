import React from "react";
// import EmptyCart from "./EmptyCart";
import { CartProduct } from "./CartProduct";
import { connect } from "react-redux";
import CartProductsList from "./CartProductsList";
import "./Cart.scss";
import { addQuantity, addToCart, substractQuantity, removeCartProduct} from "../../actions/cartActions";

class Cart extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            products: props.products,
            cartContent: props.cartContent
        };
    }

    render() {
        return (
            <div>
                <h1 className="cart-header">Twój koszyk</h1>
                
                <CartProductsList 
                    cartContent={this.props.cartContent}
                    addQuantity={this.props.addQuantity.bind(this)}
                    substractQuantity={this.props.substractQuantity.bind(this)}
                    removeCartProduct={this.props.removeCartProduct.bind(this)}/>
                {/* <EmptyCart />               */}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    products: state.products,
    cartContent: state.cartContent.cartContent
});

const mapDispatchToProps = {
   addQuantity,
   substractQuantity,
   removeCartProduct
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);