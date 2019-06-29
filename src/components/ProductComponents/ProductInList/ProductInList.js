import React from "react";
import "./ProductInList.scss";
import { NavLink } from 'react-router-dom';
import {Link} from 'react-router-dom';

export const ProductInList = (props) => (
    <NavLink 
        exact to={"/product/" + props.product.id}
        // id = {props.product.id} 
        >
        <div className="product" key={props.product.id}>
            <h1 className="productInf">{props.product.inf} </h1>
            <img className="productImg" src={props.product.img} alt={props.product.name} />
            <h2 className="productName">{props.product.name}</h2>
            <h2 className="productPrice">{props.product.price} PLN</h2>
            <Link
                exact to={"/cart"} onClick={() => this.props.addToCart(this.props.products[this.props.match.params.id])} > 
                <button type="submit" className="btn btn-primary btn-product-list">Add to cart </button>
            </Link>
        </div>
    </NavLink>
);