import { CartItem } from "../../../../../lib/types";

export const cartProductCount =
  (productId: number) => (state: { cart: CartItem[] }) =>
    state.cart.find((product) => productId && product.productId === productId)
      ?.count || 0;

export const cartTotalCount = (state: { cart: CartItem[] }) =>
  state.cart.reduce((acc, item) => acc + item.count, 0);
