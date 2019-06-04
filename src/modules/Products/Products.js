import React from "react";
import product_1 from '../../img/Product_1.png';
import product_2 from '../../img/Product_2.png';
import product_3 from '../../img/Product_3.png';
import product_4 from '../../img/Product_4.png';
import styles from './Products.scss';

const products = [
	{
		id: 1,
		store: 'new', 
		src: product_1,
		name: 'shoes',
		price: '$49.99'
	},
	{
		id: 2,
		store: 'new', 
		src: product_2,
		name: 'glasses',
		price: '$159'
	},
	{
		id: 3,
		store: 'new', 
		src: product_3,
		name: 'note',
		price: '$39'
	},
	{
		id: 4,
		store: 'new', 
		src: product_4,
		name: 'palystation',
		price: '$432'
	}
];

const myProducts = products.map(product => 
	<div className="product">
		<h1>{product.store} </h1>
		<img className='productImg' src={product.src} />
		<h2>{product.name}</h2>
		<h2>{product.price}</h2>
	</div>
	);

export class Products extends React.Component {
	render(){
		return(
			<div className='wrapperHomeRight'>{myProducts}</div>
		)
	}
}