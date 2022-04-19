import { Product } from "../../../lib/types";

export const setProducts = (products: Product[]) => {
  return {
    type: "SET_PRODUCTS",
    payload: { products },
  };
};

export const incrementCounter = () => {
  return {
    type: "INCREMENT_COUNTER",
  };
};
