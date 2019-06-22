import { ADD_TO_CART } from "../actions/cartActions";

const initialState = {
    cartContent: [],
    sum: 0
}

function containsObject(obj, list) {

    return list.some(elem => elem.id === obj.id)
}

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            if(containsObject(action.product, state.cartContent)){

            } else {
                return {
                    cartContent: [...state.cartContent, action.product]
                }
            }
            return state;
        default: return state;
    }
}