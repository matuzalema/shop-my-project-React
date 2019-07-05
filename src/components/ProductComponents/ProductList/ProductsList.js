import React from "react";
import "./ProductsList.scss";
import ProductInList from "../ProductInList/ProductInList";

export class ProductsList extends React.Component {

  render() {
    return (
      <div className="wrapperHomeRight">
        {this.props.products.map(product => (
          <ProductInList product={product} key={product.id}/>
        ))}
      </div>
    );
  }
}