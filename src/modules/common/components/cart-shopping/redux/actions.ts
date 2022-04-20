export const addToCart = (productId: string) => {
  return {
    type: "ADD_TO_CART",
    payload: { productId },
  };
};

export const removeFromCart = (productId: string) => {
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
