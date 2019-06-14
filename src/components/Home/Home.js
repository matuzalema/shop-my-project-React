import React from "react";
import { connect } from "react-redux";
import styles from "./Home.scss";
import { ProductsList } from "../Products/ProductsList.js";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: this.props.products
    };
  }
  render() {
    return (
      <div>
        <div className="homeContainer">
          <div className="wrapperHomeLeft">
            <button className="btnSort" onClick={this.sortBy}>
              Sort
            </button>
            <ul>
              <li className="sort">Name A-Z</li>
              <li className="sort">Name Z-A</li>
              <li className="sort">price ascending</li>
              <li className="sort">price descending</li>
            </ul>
          </div>
         
            <ProductsList products={this.state.products}/>
          
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products
});

export default connect(mapStateToProps)(Home);
