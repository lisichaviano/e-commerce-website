import { combineReducers, createStore } from "redux";
import { productsReducer } from "./modules/product/redux/reducers";
import { productCartReducer } from "./modules/common/cart-shopping/redux/reducers";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: productCartReducer,
});

export const store = createStore(
  rootReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
