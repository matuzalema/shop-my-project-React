import { combineReducers } from "redux";
import ProductsReducer from "./reducers-products";

const reducer = combineReducers({
  products: ProductsReducer
});

export default reducer;
