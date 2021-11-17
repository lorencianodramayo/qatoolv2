import dataReducer from "./data";
import iframeReducer from "./frame";
import countReducer from "./count";
import dynamicReducer from './dynamic';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  data: dataReducer,
  frame: iframeReducer,
  counter: countReducer,
  dynamic: dynamicReducer,
});

export default rootReducer;