import { Product } from "../../../lib/types";

export const productsSelector = (state: { products: Product[] }) =>
  state.products;

export const productByIdSelector =
  (id: number) => (state: { products: Product[] }) =>
    state.products.find((product) => id && product.id === id);
