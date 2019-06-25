import { ADD_TO_CART, ADD_QUANTITY, SUBSTRACT_QUANTITY, REMOVE_CART_PRODUCT } from "../actions/cartActions";

const initialState = {
    cartContent: []
}

// function containsObject(obj, list) {

//     return list.some(elem => {
//         elem.quintity = elem.quintity + 1;
//         return elem.id === obj.id
//     })
// }

export default function(state = initialState, action) {
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
            return {
                cartContent : cartContent
            }

            case ADD_QUANTITY:
                const addQuantity = state.cartContent.map(product => {
                    return product.id === action.productId
                        ? Object.assign({}, product, {quantity: product.quantity + 1})
                        : product;
                });
                return Object.assign({}, state, {
                    cartContent: addQuantity,
                })
            
            case SUBSTRACT_QUANTITY:
                const substractQuantity = state.cartContent.map(product => {
                    return product.id === action.productId
                        ? Object.assign({}, product, {quantity: product.quantity -1}) 
                        : product;
                });
                return Object.assign({}, state, {
                    cartContent: substractQuantity.filter(product => product.quantity > 0
       
                    )
                })

            case REMOVE_CART_PRODUCT:
                return Object.assign({}, state, {cartContent: state.cartContent.filter(product => product.id !== action.productId)})

        default: return state;
    }
}