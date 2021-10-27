const iframeReducer = (state = 0, action) => {
    switch (action.type) {
      case "SET_FRAME":
        return action.payload;
      
      case "GET_FRAME":
        return action.payload;

      case "DATA_ERROR":
        return {
          error: action.payload,
        };
        
      default:
        return state;
    }
}

export default iframeReducer;