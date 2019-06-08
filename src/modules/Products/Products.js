import React from "react";
import product_1 from "../../img/Product_1.png";
import product_2 from "../../img/Product_2.png";
import product_3 from "../../img/Product_3.png";
import product_4 from "../../img/Product_4.png";
import product_5 from "../../img/Product_5.png";
import product_6 from "../../img/Product_6.png";
import styles from "./Products.scss";

export class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          store: "new",
          src: product_1,
          name: "shoes",
          price: "$49.99"
        },
        {
          id: 2,
          store: "last item",
          src: product_2,
          name: "glasses",
          price: "$159"
        },
        {
          id: 3,
          store: "new",
          src: product_3,
          name: "note",
          price: "$39"
        },
        {
          id: 4,
          store: "new",
          src: product_4,
          name: "palystation",
          price: "$432"
        },
        {
          id: 5,
          store: "new",
          src: product_5,
          name: "light bulb",
          price: "$19"
        },
        {
          id: 6,
          store: "new",
          src: product_6,
          name: "grate",
          price: "$432"
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <h1>Products</h1>
      </div>
    );
  }
}
