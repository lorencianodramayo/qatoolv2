const iframeReducer = (state = {}, action) => {
    switch (action.type) {
      case "SET_FRAME":
        return {
          data: action.payload,
        };
      
      case "GET_FRAME":
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
}

export default iframeReducer;