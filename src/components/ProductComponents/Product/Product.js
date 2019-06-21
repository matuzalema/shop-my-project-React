import React from "react";
import { connect } from 'react-redux';
import "./Product.scss";
import { NavLink } from "react-router-dom";
import {addToCart} from "../../../actions/cartActions";
import { bindActionCreators } from 'redux';

class Product extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            // products: this.props.products
        };
    }
    render(){
        return(
            
                <div className="product-wrapper">
                   <div className="product-wrapper-letf">
                    <img 
                            src={this.props.products[this.props.match.params.id].img} 
                            alt={this.props.products[this.props.match.params.id].name}
                    />
                    </div>
                    <div className="product-wrapper-right">
                        <p className="product-inf">{this.props.products[this.props.match.params.id].inf}</p>
                        <h1 className="product-names">{this.props.products[this.props.match.params.id].name}</h1>
                        <p className="product-price">$ {this.props.products[this.props.match.params.id].price}</p>
                        <p className="product-description">{this.props.products[this.props.match.params.id].detail}</p>
                     <NavLink 
                        exact to={"/cart"} className="btn-add-to-cart" onClick={() => this.props.addToCart(this.props.products[this.props.match.params.id])}> Add to cart
                    </NavLink>
                    </div>
                </div>
        
        )
    }
}

function mapStateToProps(state) {
    return {
        products: state.products
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators(
        { addToCart: addToCart }, dispatch
    )
}


export default connect(mapStateToProps, matchDispatchToProps)(Product);