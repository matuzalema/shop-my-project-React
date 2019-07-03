import React from "react";
import "./ProductInList.scss";
import { NavLink } from 'react-router-dom';
import {Link} from 'react-router-dom';
import { addToCart } from "../../../actions/cartActions";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ProductInList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // products: this.props.products
        };
    }
    render() {
        return (

            <div
                exact to={"/product/" + this.props.product.id}
            // id = {props.product.id} 
            >
                <div className="product" key={this.props.product.id}>
                    <h1 className="productInf">{this.props.product.inf} </h1>
                    <img className="productImg" src={this.props.product.img} alt={this.props.product.name} />
                    <h2 className="productName">{this.props.product.name}</h2>
                    <h2 className="productPrice">{this.props.product.price} PLN</h2>
                    <Link
                        exact to={"/cart"} onClick={() => this.props.addToCart(this.props.product)} >
                        <button type="submit" className="button button-product-list">dodaj do koszyka </button>
                    </Link>
                    <Link
                        exact to={"/product/" + this.props.product.id} >
                        <button type="submit" className="button button-more">więcej &nbsp;>></button>
                    </Link>
                </div>
            </div>

        )
    }
}

// function mapStateToProps(state) {
//     return {
//         products: state.products
//     }
// }

function matchDispatchToProps(dispatch) {
    return bindActionCreators(
        { addToCart: addToCart }, dispatch
    )
}


export default connect(matchDispatchToProps)(ProductInList);
// const ProductInList = (props) => (
    // <div 
    //     exact to={"/product/" + props.product.id}
    //     // id = {props.product.id} 
    //     >
    //     <div className="product" key={props.product.id}>
    //         <h1 className="productInf">{props.product.inf} </h1>
    //         <img className="productImg" src={props.product.img} alt={props.product.name} />
    //         <h2 className="productName">{props.product.name}</h2>
    //         <h2 className="productPrice">{props.product.price} PLN</h2>
    //         <Link
    //             exact to={"/cart"} onClick={() => this.props.addToCart(this.props.product)} > 
    //             <button type="submit" className="button button-product-list">dodaj do koszyka </button>
    //         </Link>
    //         <Link
    //             exact to={"/product/" + props.product.id} >
    //             <button type="submit" className="button button-more">więcej &nbsp;>></button>
    //         </Link>
    //     </div>
    // </div>
// );

// function matchDispatchToProps(dispatch) {
//     return bindActionCreators(
//         { addToCart: addToCart }, dispatch
//     )
// }


// export default connect(matchDispatchToProps)(ProductInList);