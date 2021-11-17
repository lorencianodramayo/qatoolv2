const dynamicReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_DYNAMIC":
      return {
        data: action.payload,
      };

    case "GET_DYNAMIC":
      return {
        data: action.payload,
      };

    case "DATA_ERROR":
      return {
        error: action.payload,
      };

    default:
      return state;
  }
};

export default dynamicReducer;
