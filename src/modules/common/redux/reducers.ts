const incrementCounterReducer = (state = 0, action: { type: any }) => {
  switch (action.type) {
    case "INCREMENT_COUNTER":
      return state + 1;
    default:
      return state;
  }
};

export { incrementCounterReducer };
