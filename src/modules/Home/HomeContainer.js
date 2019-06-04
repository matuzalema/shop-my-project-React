import React from "react";

this.state = {
        products: [
            'Item 1',
            'Item 2',
            'Item 3',
            'Item 4'
        ]
};

renderProducts() {
        return this.state.products.map((product) => {
                return <Product name={product} />
                console.log(product);
        });
}

export default renderProducts;