import { CartItem } from "../../../../lib/types";

const productCartReducer = (
  state: CartItem[] = [],
  action: { type: any; payload: any }
) => {
  const findItemIndex = (productId: number) =>
    state.findIndex((item) => item.productId === productId);

  switch (action.type) {
    case "ADD_TO_CART":
      const index = findItemIndex(action.payload.productId);
      let cartItem = [];
      index === -1
        ? (cartItem = [
            ...state,
            { productId: action.payload.productId, count: 1 },
          ])
        : (cartItem = [
            ...state.slice(0, index),
            {
              productId: action.payload.productId,
              count: state[index].count + 1,
            },
            ...state.slice(index + 1),
          ]);
      return cartItem;
    case "REMOVE_FROM_CART":
      const index2 = findItemIndex(action.payload.productId);
      let cartItem2 = [];
      index2 === -1
        ? (cartItem2 = state)
        : state[index2].count === 1
        ? (cartItem2 = [...state.slice(0, index2), ...state.slice(index2 + 1)])
        : (cartItem2 = [
            ...state.slice(0, index2),
            {
              productId: action.payload.productId,
              count: state[index2].count - 1,
            },
            ...state.slice(index2 + 1),
          ]);
      return cartItem2;
    case "CLEAR_CART":
      return [];
    default:
      return state;
  }
};

export { productCartReducer };
