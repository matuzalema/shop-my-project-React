import React from "react";
// import EmptyCart from "./EmptyCart";
import { CartProduct } from "./CartProduct";
import { connect } from "react-redux";
import CartProductsList from "./CartProductsList";
import "./Cart.scss";
import { addQuantity, addToCart, substractQuantity, removeCartProduct, overallPrice} from "../../actions/cartActions";
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

class Cart extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            products: props.products,
            cartContent: props.cartContent,
            overallPrice: props.overallPrice
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
                <form className="payForm">
                    <input placeholder="kod rabatowy" className="discount" type="text" name="input" />
                    
                    <h2 className="sum">Do zapłaty: {this.props.overallPrice}</h2>
                    <Link
                        exact to={"/order"}>
                        <button type="submit" className="btn-pay">Zamów</button> </Link>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    products: state.products,
    cartContent: state.cartContent.cartContent,
    overallPrice: state.cartContent.overallPrice,
});

// const mapDispatchToProps = {
//    addQuantity,
//    substractQuantity,
//    removeCartProduct
// };
function matchDispatchToProps(dispatch) {
    return bindActionCreators(
        { addQuantity: addQuantity, substractQuantity: substractQuantity, removeCartProduct: removeCartProduct }, dispatch
    )
}

export default connect(
    mapStateToProps,
    matchDispatchToProps
)(Cart);