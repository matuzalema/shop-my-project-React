import React from "react";
import { connect } from "react-redux";
import styles from "./ProductsList.scss";

export class ProductsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0
    };
    console.log(this.props);
  }

  render() {
    return (
      <div className="wrapperHomeRight">
        
        {this.props.products.map(product => (
          <div className="product" key={product.id}>
            <h1 className="productInf">{product.inf} </h1>
            <img className="productImg" src={product.img} alt={product.name} />
            <h2 className="productName">{product.name}</h2>
            <h2 className="productPrice">{product.price}</h2>
          </div>
        ))}
        ;
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps)(ProductsList);