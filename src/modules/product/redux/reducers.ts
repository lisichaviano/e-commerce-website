const productsReducer = (state = [], action: { type: any; payload: any }) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return action.payload.products;
    default:
      return state;
  }
};

export { productsReducer };
