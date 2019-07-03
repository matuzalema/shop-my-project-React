import React from 'react';
import {Jumbotron} from 'react-bootstrap';
import "./Promotions.scss";
import "../../"


export class Promotions extends React.Component {
	render(){
		return <div className="promotions" >
			
			<Jumbotron>
				<p className="promotions-top">Kolejne obniżki</p>
				<h1 className="promotions-header">Wyprzedaż, teraz nawet <br /> <span class="promotions-span">30% taniej </span> <br />w sklepach stacjonarnych</h1>
				<p className="promotion-desc">
					Oferta dotyczy wybranych produktów w sklepach stacjonarnych i obowiązuje do wyczerpania zapasów. Ceny w sklepie stacjonarnym oraz internetowym mogą się różnić.
  </p>
				<p>
				</p>
			</Jumbotron>
			
		</div>
	}
}