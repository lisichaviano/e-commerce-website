export const addToCart = (productId: number) => {
  return {
    type: "ADD_TO_CART",
    payload: { productId },
  };
};

export const removeFromCart = (productId: number) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: { productId },
  };
};

export const clearCart = () => {
  return {
    type: "CLEAR_CART",
  };
};
