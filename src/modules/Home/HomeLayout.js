import React from "react";
import styles from './Home.scss';

export class Home extends React.Component {
	render() {
    	return (
	    	<div>
	    		<div className='homeContainer'>
	    			<div className='wrapperHomeLeft'>
		    			<h1>Sort</h1>
		    			<ul>
		    				<li>Name A-Z</li>
		    				<li>Name Z-A</li>
		    				<li>price ascending</li>
		    				<li>price descending</li>
		    			</ul>
		    		</div>
		    		<div className='wrapperHomeRight'>
						<div className='product'>
							<h1>New</h1>
							<img src='img/Product_1.png'/>
							<h2>Product name</h2>
							<h2>$159</h2>
						</div>
						<div className='product'>
							<h1>New</h1>
							<img src='img/Product_1.png'/>
							<h2>Product name</h2>
							<h2>$159</h2>
						</div>
						<div className='product'>
							<h1>New</h1>
							<img src='img/Product_1.png'/>
							<h2>Product name</h2>
							<h2>$159</h2>
						</div>
						<div className='product'>
							<h1>New</h1>
							<img src='img/Product_1.png'/>
							<h2>Product name</h2>
							<h2>$159</h2>
						</div>
		    		</div>
	    		</div>
	    	</div>
	    )
	}
}