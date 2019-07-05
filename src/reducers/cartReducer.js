import { ADD_TO_CART, ADD_QUANTITY, SUBSTRACT_QUANTITY, REMOVE_CART_PRODUCT } from "../actions/cartActions";
// import { voidTypeAnnotation } from "@babel/types";

const initialState = {
    cartContent: [],
    overallPrice: 0,
    cartProductsQuantity: 0
}

function sumCartPrices(cart) {
    let sumPrices = cart.reduce(function(prev, cur){
        return prev + (cur.price * cur.quantity);
    }, 0);
    return sumPrices.toFixed(2);   
}

function sumProductsInCart(cart) {
    let sumProductsInCart = cart.reduce(function (prev, cur) {
        return prev + cur.quantity;
    }, 0);
    return sumProductsInCart;
}

function setStateWithNewPropertis(state, newCart){
    return Object.assign({}, state, {
        cartContent: newCart,
        overallPrice: sumCartPrices(newCart),
        cartProductsQuantity: sumProductsInCart(newCart)
    })

}
export default function(state = initialState, action) {
    console.log(action);
    debugger
    switch (action.type) {
        case ADD_TO_CART:
            let quantityUpdated = false;
            let cartContent = state.cartContent;
            for(let i=0; i<cartContent.length; i++){
                if(cartContent[i].id === action.product.id){
                    cartContent[i].quantity += 1;
                    quantityUpdated = true;
                }
            }
            if(!quantityUpdated) {
                cartContent = [...cartContent, action.product];
            }

            return setStateWithNewPropertis(state, cartContent);
            // return {
            //     cartContent : cartContent,
            //     overallPrice: sumCartPrices(cartContent),
            //     cartProductsQuantity: sumProductsInCart(cartContent)
            // }

            case ADD_QUANTITY:
                const addQuantity = state.cartContent.map(product => {
                    return product.id === action.productId
                        ? Object.assign({}, product, {quantity: product.quantity + 1})
                        : product;
                });

                // let pricesArray = cartContent.map(product => product.price);
                
                // return Object.assign({}, state, {
                //     cartContent: addQuantity,
                //     overallPrice: sumCartPrices(addQuantity)
                // })
            return setStateWithNewPropertis(state, addQuantity);
            
            case SUBSTRACT_QUANTITY:
                let substractQuantity = state.cartContent.map(product => {
                    return product.id === action.productId
                        ? Object.assign({}, product, {quantity: product.quantity -1}) 
                        : product;
                });
                //remove product with 0 quantity
                substractQuantity = substractQuantity.filter(product => product.quantity > 0)

            return setStateWithNewPropertis(state, substractQuantity);

            case REMOVE_CART_PRODUCT:
            const remove = state.cartContent.filter(product => product.id !== action.productId)
            
            return setStateWithNewPropertis(state, remove);


    


        default: return state;
    }
}