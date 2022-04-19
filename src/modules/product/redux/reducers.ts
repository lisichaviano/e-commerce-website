const productsReducer = (state = [], action: { type: any; payload: any }) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return action.payload.products;
    default:
      return state;
  }
};
const incrementCounterReducer = (state = 0, action: { type: any }) => {
  switch (action.type) {
    case "INCREMENT_COUNTER":
      return state + 1;
    default:
      return state;
  }
};

export { productsReducer, incrementCounterReducer };
