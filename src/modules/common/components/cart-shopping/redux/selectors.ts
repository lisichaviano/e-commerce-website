import { CartItem, Product } from "../../../../../lib/types";

export const cartProductCountSelector =
  (productId: number) => (state: { cart: CartItem[] }) =>
    state.cart.find((product) => productId && product.productId === productId)
      ?.count || 0;

export const cartTotalCountSelector = (state: { cart: CartItem[] }) =>
  state.cart.reduce((acc, item) => acc + item.count, 0);

export const cartItemsSelector = (state: { cart: CartItem[] }) => state.cart;

export const cartItemsWithProductSelector = (state: {
  cart: CartItem[];
  products: Product[];
}) =>
  state.cart.map((item) => ({
    ...item,
    product: state.products.find((product) => product.id === item.productId),
  }));

export const cartTotalPriceSelector = (state: {
  cart: CartItem[];
  products: Product[];
}) =>
  cartItemsWithProductSelector(state).reduce(
    (acc, item) => acc + (item.product ? item.product.price * item.count : 0),
    0
  );
