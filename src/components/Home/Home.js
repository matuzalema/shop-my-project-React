import React from "react";
import { connect } from "react-redux";
import styles from "./Home.scss";
import { ProductsList } from "../Products/ProductsList.js";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: props.products,
      direction: {
        Price: "asc"
      }
    };
    //  this.sortBy = this.sortBy.bind(this);
    // this.sortByKey = this.sortByKey.bind(this);
  }
  
  mySort() {
    this.state.products.sort((a,b) => a.price - b.price );
  }

  sortByKey(key){
    return this.state.products.sort((a, b) => {
      if (isNaN(a[key])) {
        return (a[key]).localeCompare(b[key]);
      } else {
        return (parseFloat(a[key]) - parseFloat(b[key]));
      }
    })
  }
  sortBy(key) {
    this.setState({
      products: this.sortByKey(key)
          })
        }

  render() {
    return (
      <div>
        <div className="homeContainer">
          <div className="wrapperHomeLeft">
            <button className="btnSort" >
              Sort
            </button>
            <ul>
              <button className="sort" onClick={() => this.sortBy("name")}>Name A-Z</button>
              <button className="sort">Name Z-A</button>
              <button className="sort" onClick={() => this.sortBy("price")}>price ascending</button>
              <button className="sort">price descending</button>
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
