const incrementCounterReducer = (state = 0, action: { type: string }) => {
  switch (action.type) {
    case "INCREMENT_COUNTER":
      return state + 1;
    default:
      return state;
  }
};

export { incrementCounterReducer };
