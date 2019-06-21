import React from "react";
import { connect } from 'react-redux';
import "./Product.scss";

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
                        <button className="btn-add-to-card">Add to card</button>
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

export default connect(mapStateToProps)(Product);