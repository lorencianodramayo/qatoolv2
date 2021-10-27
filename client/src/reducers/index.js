import dataReducer from "./data";
import iframeReducer from "./frame";
import countReducer from "./count"
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  data: dataReducer,
  frame: iframeReducer,
  counter: countReducer,
});

export default rootReducer;