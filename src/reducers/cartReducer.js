import { ADD_TO_CART } from "../actions/cartActions";

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
        default: return state;
    }
}