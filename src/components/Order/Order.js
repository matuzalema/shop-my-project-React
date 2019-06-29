import React from "react";
// import EmptyCart from "./EmptyCart";
import { connect } from "react-redux";
import './Order.scss';
import { Link } from "react-router-dom";


class Order extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: props.products,
            cartContent: props.cartContent,
            overallPrice: props.overallPrice
        };
    }

    renderTableData() {
        return this.state.cartContent.map((product, index) => {
            const { id, name, quantity, price } = product
            return (
                <tr key={id}>
                    <td className="order-td">{name}</td>
                    <td className="order-td">{quantity}</td>
                    <td className="order-td">{price}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div className='order'>
                <h1 className='order-header'>Twoje zamówienie</h1>
                <table className='order-table'>
                    <thead className='order-thead'>
                        <tr className='order-tr'>
                            <th className='order-th'>nazwa</th>
                            <th className='order-th'>ilość</th>
                            <th className='order-th'>cena</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTableData()}
                    </tbody>
                </table>
                <h2 className="sum">Do zapłaty: {this.state.overallPrice}</h2>
                <button type="submit" className="btn btn-primary pay">zapłać</button>
                <Link style={{ textDecoration: 'none' }}
                    exact to={"/home"}>
                    <button type="submit" className="btn btn-back">wróć do zakupów</button>
                </Link>
            </div>
        )
    }   
}

const mapStateToProps = state => ({
    products: state.products,
    cartContent: state.cartContent.cartContent,
    overallPrice: state.cartContent.overallPrice,
});

export default connect(mapStateToProps)(Order);