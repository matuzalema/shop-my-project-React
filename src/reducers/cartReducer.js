import { ADD_TO_CART } from "../actions/cartActions";

const initialState = {
    cartContent: [],
    sum: 0
}

export default function(state = initialState, action) {
    let dupa = "dupa";
    alert('dupa');
    dupa = dupa + "ja";
    switch (action.type) {
        case ADD_TO_CART:
            const test = 13;
            alert('dupa');
            return state;
        default: return state;
    }
}