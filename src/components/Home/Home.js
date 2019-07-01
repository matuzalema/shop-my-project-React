import React from "react";
import { connect } from "react-redux";
import styles from "./Home.scss";
import cloneDeep from 'lodash/cloneDeep';
import {ProductsList} from "../ProductComponents/ProductList/ProductsList";
import "../../sass/_components.scss";
import PaginationComponent from "react-reactstrap-pagination";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.pageSize = 6;
    this.state = {
      selectedPage: 1,
      products: cloneDeep(props.products),
      productsToDisplay: cloneDeep(props.products).slice(0, this.pageSize),
      
      direction: "asc",
      lastSortKey: "name"
    };
    this.handleSelected = this.handleSelected.bind(this);
  }

  filterByCategory(category) {
    let productsAfterFilter;
    if(category==='all'){
      productsAfterFilter = this.props.products;
    }else{
      productsAfterFilter = this.props.products.filter(product => product.category === category)
    }
    this.setState({
      products: cloneDeep(productsAfterFilter),
      selectedPage: 1,
      productsToDisplay: productsAfterFilter.slice((this.pageSize) - this.pageSize, (this.pageSize))
    });
    
  }

  sortByKey(key) {
    let direction;
    if (key === this.state.lastSortKey){
      direction = this.state.direction === "asc" ? "desc" : "asc"
    } else {
      direction = "asc"
    }

   let productsSorted = this.state.products.sort((a, b) => {
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
      products: productsSorted,
      direction: direction,
      lastSortKey: key,
      selectedPage: 1,
      productsToDisplay: productsSorted.slice((this.pageSize) - this.pageSize, (this.pageSize))
    })
  }

  

  handleSelected(selectedPage) {
    this.setState({
      selectedPage: selectedPage,
      productsToDisplay: this.state.products.slice((selectedPage * this.pageSize) - this.pageSize, (selectedPage * this.pageSize))
    
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
            <p className="sort-by">
              Kategorie
            </p>
            <button className="btn btn-sort" onClick={() => this.filterByCategory("all")}>Wszystkie</button>
            <button className="btn btn-sort" onClick={() => this.filterByCategory("aparaty fotograficzne")}>Aparaty fotograficzne</button>
            <button className="btn btn-sort" >Drony</button>
            <button className="btn btn-sort" >Głowice</button>
            <button className="btn btn-sort" >Mikrofony</button>
            <button className="btn btn-sort" >Nośniki pamięci</button>

          </div>        
            <ProductsList products={this.state.productsToDisplay}/>
          <div className="container-fluid">
            <PaginationComponent
              totalItems={this.state.products.length}
              pageSize={this.pageSize}
              onSelect={this.handleSelected}
              activePage={this.state.selectedPage}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products
});

export default connect(mapStateToProps)(Home);
