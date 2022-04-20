import { combineReducers, createStore } from "redux";
import { productsReducer } from "./modules/product/redux/reducers";
import { incrementCounterReducer } from "./modules/common/redux/reducers";

const rootReducer = combineReducers({
  products: productsReducer,
  cartCounter: incrementCounterReducer,
});

export const store = createStore(
  rootReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
