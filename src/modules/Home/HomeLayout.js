import React from "react";
import styles from './Home.scss';

import product_1 from '../../img/Product_1.png';
import product_2 from '../../img/Product_2.png';
import product_3 from '../../img/Product_3.png';
import product_4 from '../../img/Product_4.png';
import {Products} from '../Products/Products.js';

export class Home extends React.Component {
	render() {
    	return (
	    	<div>
	    		<div className='homeContainer'>
	    			<div className='wrapperHomeLeft'>
		    			<h1>Sort</h1>
		    			<ul>
		    				<li className="sort">Name A-Z</li>
		    				<li className="sort">Name Z-A</li>
		    				<li className="sort">price ascending</li>
		    				<li className="sort">price descending</li>
		    			</ul>
		    		</div>
		    		<div>
						<Products />	
		    		</div>
	    		</div>
	    	</div>
	    )
	}
}