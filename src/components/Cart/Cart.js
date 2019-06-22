import React from "react";
// import EmptyCart from "./EmptyCart";
import { CartProduct } from "./CartProduct";
import { connect } from "react-redux";

class Cart extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            products: props.products
        };
    }
    render() {
        return (
            <div>
                {/* <EmptyCart />               */}
            <CartProduct />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    products: state.products
});

export default connect(mapStateToProps)(Cart);