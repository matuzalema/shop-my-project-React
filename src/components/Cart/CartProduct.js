import React from 'react';
import { connect } from "react-redux";

export class CartProduct extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            products: props.products
        }
    }
    render(){
        return(
            <div>
                <h1>Product</h1>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    products: state.products
});

export default connect(mapStateToProps)(CartProduct);