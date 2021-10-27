const dataReducer = (state = {}, action) => {
    switch (action.type) {
      case "SAVE_ZIP":
        return {
          ...state,
          data: action.payload,
        };
      
      case "GET_CREATIVE":
        return {
          ...state,
          data: action.payload,
        }

      case "DATA_ERROR":
        return {
          error: action.payload,
        };
        
      default:
        return state;
    }
}

export default dataReducer;