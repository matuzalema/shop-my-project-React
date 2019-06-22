import React from "react";
import { connect } from "react-redux";
import styles from "./Home.scss";
import { ProductsList } from "../ProductComponents/ProductList/ProductsList";
import "../../sass/_components.scss";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: props.products,
      direction: "asc",
      lastSortKey: ""
    };
  }

  sortByKey(key) {
    let direction;
    if (key === this.state.lastSortKey){
      direction = this.state.direction === "asc" ? "desc" : "asc"
    } else {
      direction = "asc"
    }

   let products = this.state.products.sort((a, b) => {
      if(isNaN(a[key])){
        if (direction === "asc") {
          return (a[key]).localeCompare(b[key])
        } else {
          return (b[key]).localeCompare(a[key])
        }
      } else {
        if (direction === "asc") {
          return parseFloat(a[key]) - parseFloat(b[key])
        } else {
          return parseFloat(b[key]) - parseFloat(a[key])
        }
      }
    })
    this.setState({
      products: products,
      direction: direction,
      lastSortKey: key
    })
  }

  render() {
    return (
      <div>
        <div className="homeContainer">
          <div className="wrapperHomeLeft">
            <p className="sort-by">
              Sort products
            </p>
              <button className="btn btn-sort" onClick={() => this.sortByKey("name")}>Sort by name</button>
              <button className="btn btn-sort" onClick={() => this.sortByKey("price")}>Sort by price</button>
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
