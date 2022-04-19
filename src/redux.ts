import { combineReducers, createStore } from "redux";
import { productsReducer } from "./modules/product/redux/reducers";

const rootReducer = combineReducers({
  products: productsReducer,
});

export const store = createStore(
  rootReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
