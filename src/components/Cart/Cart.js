import React from "react";
import { connect } from "react-redux";
import CartProductsList from "./CartProductsList";
import "./Cart.scss";
import { addQuantity, substractQuantity, removeCartProduct} from "../../actions/cartActions";
import { Link } from 'react-router-dom';

class Cart extends React.Component {

    render() {
        return (
            <div className="cart">
                <h1 className="cart-header">Twój koszyk</h1>
                <CartProductsList 
                    cartContent={this.props.cartContent}
                    addQuantity={this.props.addQuantity.bind(this)}
                    substractQuantity={this.props.substractQuantity.bind(this)}
                    removeCartProduct={this.props.removeCartProduct.bind(this)}/>
                <form className="payForm">
                    <input placeholder="kod rabatowy" className="discount" type="text" name="input" />
                    <h2 className="sum">Do zapłaty: {this.props.overallPrice} PLN</h2>
                    <Link exact to={"/order"}>
                        <button type="submit" className="button button-primary button-pay">Zamów</button>
                    </Link>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    cartContent: state.cartContent.cartContent,
    overallPrice: state.cartContent.overallPrice,
});

const mapDispatchToProps =  {
    addQuantity, 
    substractQuantity,
    removeCartProduct,
}

export default connect( mapStateToProps, mapDispatchToProps)(Cart);