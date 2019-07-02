import React from "react";
import { connect } from "react-redux";
import styles from "./ProductsList.scss";
import { ProductInList } from "../ProductInList/ProductInList";
import Pagination from "react-reactstrap-pagination";
import "../../Pagination/Pagination.scss";

// import "../../Pagrination/bootstrap-pagination.css";
// import "../../Pagrination/bootstrap-theme-pagination.css";


export class ProductsList extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
    
      // products: this.props.products,
      currentProducts: this.props.products.slice(0, this.pageSize)
    };
    
    // this.pageCount = Math.ceil(this.props.products /this.pageSize);
  }

  

  render() {
    return (
      <div className="wrapperHomeRight">  
      {/* <Example /> */}
        {this.props.products.map(product => (
          <ProductInList product={product} key={product.id}/>
          
          // <div className="product" key={product.id}>
          //   <h1 className="productInf">{product.inf} </h1>
          //   <img className="productImg" src={product.img} alt={product.name} />
          //   <h2 className="productName">{product.name}</h2>
          //   <h2 className="productPrice">{product.price}</h2>
          // </div>
        ))}
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     products: state.products
//   }
// }

// export default connect(mapStateToProps)(ProductsList);